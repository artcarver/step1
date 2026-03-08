/* ============================================================
   STEP 1 STUDY HUB — Shared App Logic (app.js)
   ============================================================ */

// ── Nav Active State ──────────────────────────────────────
function setNavActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Exam Date ─────────────────────────────────────────────
function getExamDate() { return localStorage.getItem('step1-exam-date'); }
function setExamDate(d) { localStorage.setItem('step1-exam-date', d); }

function getDaysRemaining() {
  const s = getExamDate();
  if (!s) return null;
  const exam = new Date(s + 'T12:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.max(0, Math.round((exam - now) / (1000*60*60*24)));
}

function renderCountdown() {
  const daysEl = document.getElementById('cd-days');
  const dateEl = document.getElementById('cd-date');
  if (!daysEl) return;
  const days = getDaysRemaining();
  const s = getExamDate();
  if (days === null) {
    daysEl.textContent = '—'; if (dateEl) dateEl.textContent = 'Not set'; return;
  }
  daysEl.textContent = days;
  if (dateEl) {
    const exam = new Date(s + 'T12:00:00');
    dateEl.textContent = exam.toLocaleDateString('en-US', {month:'long',day:'numeric',year:'numeric'});
  }
  updateNavPill();
}

function updateNavPill() {
  const lbl = document.getElementById('nav-exam-label');
  if (!lbl) return;
  const days = getDaysRemaining();
  if (days === null) {
    lbl.textContent = 'Set Exam Date';
  } else {
    lbl.textContent = days + 'd remaining';
  }
}

// ── Modal helpers ─────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function openDateModal() {
  const s = getExamDate();
  const inp = document.getElementById('date-input');
  if (s && inp) inp.value = s;
  openModal('date-modal');
}
function closeDateModal() { closeModal('date-modal'); }

async function saveDateModal() {
  const v = document.getElementById('date-input')?.value;
  if (v) {
    setExamDate(v);
    renderCountdown();
    await CloudSync.saveExamDate(v);
  }
  closeDateModal();
}

// Close overlay on background click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// ── localStorage Store ────────────────────────────────────
const Store = {
  get(k, def = null) {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

// ── Firebase Cloud Sync ───────────────────────────────────
// Primary storage is Firestore when signed in.
// localStorage acts as a local cache / offline fallback.
//
// Data keys used across pages:
//   examDate          — string, top-level user doc field
//   uw-entries        — dashboard UWorld sessions
//   uw-exams          — dashboard practice exams
//   uw-settings       — dashboard settings
//   uw-unique-done    — dashboard unique Q count
//   uw-weaknesses     — dashboard weak points
//   sketchy-pharm     — tracker progress object
//   sketchy-micro     — tracker progress object
//   pixorize          — tracker progress object

const CloudSync = {

  // ── Exam date ───────────────────────────────────────────
  async saveExamDate(dateStr) {
    // Always write to localStorage first as the fast local cache
    localStorage.setItem('step1-exam-date', dateStr);
    if (!window.db || !window.currentUser) return;
    try {
      await db.collection('users').doc(currentUser.uid)
        .set({ examDate: dateStr }, { merge: true });
    } catch(e) { console.warn('Cloud save examDate failed:', e); }
  },

  async loadExamDate() {
    if (!window.db || !window.currentUser) return null;
    try {
      const doc = await db.collection('users').doc(currentUser.uid).get();
      return doc.exists ? (doc.data().examDate || null) : null;
    } catch(e) { console.warn('Cloud load examDate failed:', e); return null; }
  },

  // ── Generic save: localStorage first, then Firestore ───
  async save(key, data) {
    Store.set(key, data); // instant local write
    if (!window.db || !window.currentUser) return;
    try {
      await db.collection('users').doc(currentUser.uid)
        .collection('data').doc(key)
        .set({ payload: JSON.stringify(data), updatedAt: Date.now() });
    } catch(e) { console.warn(`Cloud save "${key}" failed:`, e); }
  },

  // ── Generic load: Firestore first, fall back to localStorage
  // Merge strategy: for arrays take the longer one; for objects prefer cloud.
  async load(key, localDefault = null) {
    const local = Store.get(key, localDefault);
    if (!window.db || !window.currentUser) return local;
    try {
      const doc = await db.collection('users').doc(currentUser.uid)
        .collection('data').doc(key).get();
      if (!doc.exists) return local;
      const cloud = JSON.parse(doc.data().payload);
      if (Array.isArray(cloud) && Array.isArray(local)) {
        return cloud.length >= local.length ? cloud : local;
      }
      return cloud ?? local;
    } catch(e) { console.warn(`Cloud load "${key}" failed:`, e); return local; }
  },

  // ── On sign-in: push local data up, then pull merged state down ──
  // This preserves anything logged offline and ensures every page
  // sees fresh data without needing page-level logic.
  async syncOnSignIn() {
    if (!window.db || !window.currentUser) return;
    const keys = [
      'uw-entries', 'uw-exams', 'uw-settings', 'uw-unique-done', 'uw-weaknesses',
      'sketchy-pharm', 'sketchy-micro', 'pixorize',
      'df-bookmarks', 'df-sr-data', 'micro-bookmarks', 'goals-state'
    ];
    const uid = currentUser.uid;

    for (const key of keys) {
      try {
        const local = Store.get(key);
        const snap  = await db.collection('users').doc(uid).collection('data').doc(key).get();

        if (!snap.exists) {
          // Nothing in cloud yet — upload whatever is local
          if (local !== null) {
            await db.collection('users').doc(uid).collection('data').doc(key)
              .set({ payload: JSON.stringify(local), updatedAt: Date.now() });
          }
        } else {
          // Cloud exists — it is always authoritative (handles sign-out wipe case)
          const cloud = JSON.parse(snap.data().payload);
          // Only prefer local if cloud is empty/zero and local has real data
          // (handles first-time use on a new device before any cloud save)
          let winner = cloud;
          if (Array.isArray(cloud) && cloud.length === 0 && Array.isArray(local) && local.length > 0) {
            winner = local;
          } else if (typeof cloud === 'number' && cloud === 0 && typeof local === 'number' && local > 0) {
            winner = local;
          } else if (cloud && typeof cloud === 'object' && !Array.isArray(cloud) &&
                     Object.keys(cloud).length === 0 && local && typeof local === 'object' &&
                     Object.keys(local).length > 0) {
            // Cloud has empty object, local has real tracker data — prefer local
            winner = local;
          }
          Store.set(key, winner);
          // If local won, push it to cloud too
          if (winner !== cloud) {
            await db.collection('users').doc(uid).collection('data').doc(key)
              .set({ payload: JSON.stringify(winner), updatedAt: Date.now() });
          }
        }
      } catch(e) { console.warn(`Sync failed for "${key}":`, e); }
    }
  }
};

// ── Auth state handler ────────────────────────────────────
window.addEventListener('appAuthStateChanged', async (e) => {
  const user = e.detail.user;

  // Update nav auth button
  if (typeof window.updateNavAuth === 'function') window.updateNavAuth(user);

  if (user) {
    // Merge local <-> cloud for all data keys
    await CloudSync.syncOnSignIn();

    // Pull exam date
    const cloudDate = await CloudSync.loadExamDate();
    if (cloudDate) {
      localStorage.setItem('step1-exam-date', cloudDate);
    }

    renderCountdown();

    // Notify the current page that fresh data is ready
    if (typeof window.onCloudSyncComplete === 'function') {
      window.onCloudSyncComplete();
    }
  } else {
    // Signed out — clear all cached user data
    localStorage.removeItem('step1-exam-date');
    [
      'uw-entries', 'uw-exams', 'uw-settings', 'uw-unique-done', 'uw-weaknesses',
      'sketchy-pharm', 'sketchy-micro', 'pixorize',
      'df-bookmarks', 'df-sr-data', 'micro-bookmarks', 'goals-state'
    ].forEach(k => localStorage.removeItem(k));
    renderCountdown();

    if (typeof window.onCloudSyncComplete === 'function') {
      window.onCloudSyncComplete();
    }
  }
});

// ── Quotes ────────────────────────────────────────────────
const QUOTES = [
  {q:"Medicine is a science of uncertainty and an <strong>art of probability</strong>.", a:"— William Osler"},
  {q:"The good physician treats the disease; the <strong>great physician</strong> treats the patient.", a:"— William Osler"},
  {q:"Wherever the art of medicine is loved, there is also a love of <strong>humanity</strong>.", a:"— Hippocrates"},
  {q:"In nothing do men more nearly approach the gods than in <strong>giving health to men</strong>.", a:"— Cicero"},
  {q:"The secret of the care of the patient is in <strong>caring for the patient</strong>.", a:"— Francis Peabody"},
  {q:"After climbing a great hill, one only finds that there are <strong>many more hills</strong> to climb.", a:"— Nelson Mandela"},
  {q:"Fall down seven times, <strong>stand up eight</strong>.", a:"— Japanese Proverb (七転び八起き)"},
  {q:"The cherry blossom is beloved because it is <strong>here and then gone</strong> — a reminder to live fully now.", a:"— Japanese Tradition"},
  {q:"<strong>Ganbatte</strong> — do your best with everything you have.", a:"— Japanese Proverb"},
  {q:"You are not behind. You are on your <strong>own timeline</strong>, and that's enough.", a:"— Reminder for today"},
];

function renderQuote() {
  const el = document.getElementById('daily-quote');
  const at = document.getElementById('quote-attr');
  if (!el) return;
  const d = new Date(); const i = d.getDate() % QUOTES.length;
  el.innerHTML = '\u201c' + QUOTES[i].q + '\u201d';
  if (at) at.textContent = QUOTES[i].a;
}

// ── Footer date ───────────────────────────────────────────
function renderFooterDate() {
  const el = document.getElementById('footer-date');
  if (el) el.textContent = new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setNavActive();
  renderCountdown();
  renderQuote();
  renderFooterDate();
  updateNavPill();
});
