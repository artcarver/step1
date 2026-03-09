/* nav.js — injects shared navigation, Firebase SDK, and auth.js */

// ── Firebase SDK ───────────────────────────────────────────────
// Scripts are loaded sequentially — each waits for the previous to
// finish before the next loads. auth.js runs only after all three
// SDK modules are fully ready.
// NOTE: defer is intentionally NOT used — it is silently ignored on
// dynamically-created script elements, causing unpredictable load order.
(function injectFirebase() {
  const sdkUrls = [
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js',
  ];

  function loadScript(src, onload) {
    const s = document.createElement('script');
    s.src = src;
    s.async = false; // preserve execution order
    s.onload  = onload || null;
    s.onerror = () => console.error('Firebase load failed:', src);
    document.head.appendChild(s);
  }

  // Recursive chain: loads each URL in order, then loads auth.js last
  function loadChain(urls, finalSrc) {
    if (!urls.length) {
      loadScript(finalSrc, null);
      return;
    }
    loadScript(urls[0], () => loadChain(urls.slice(1), finalSrc));
  }

  loadChain(sdkUrls, 'auth.js');
})();

// ── Nav + Modal ────────────────────────────────────────────────
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  // Set --nav-active-color per page if not already set by the page itself
  const PAGE_COLORS = {
    'index.html':         'var(--sakura2)',
    'drugfacts.html':     'var(--sakura2)',
    'microfacts.html':    'var(--sage)',
    'sketchy-pharm.html': 'var(--sakura2)',
    'sketchy-micro.html': 'var(--sage)',
    'pixorize.html':      'var(--sky)',
    'dashboard.html':     'var(--gold)',
  };
  const pageColor = PAGE_COLORS[currentPage];
  if (pageColor && !document.documentElement.style.getPropertyValue('--nav-active-color')) {
    document.documentElement.style.setProperty('--nav-active-color', pageColor);
  }

  function navLink(href, label) {
    const active = currentPage === href ? ' active' : '';
    return `<a class="nav-link${active}" href="${href}">${label}</a>`;
  }

  const nav = `
  <nav class="nav">
    <div class="nav-inner">

      <a class="nav-brand" href="index.html">
        <span class="nav-brand-text">Step 1</span>
      </a>

      <div class="nav-divider"></div>

      <div class="nav-links">
        ${navLink('index.html', 'Home')}
        ${navLink('drugfacts.html', 'Drug Facts')}
        ${navLink('microfacts.html', 'Micro Facts')}
        ${navLink('sketchy-pharm.html', 'Sk. Pharm')}
        ${navLink('sketchy-micro.html', 'Sk. Micro')}
        ${navLink('pixorize.html', 'Pixorize')}
        ${navLink('dashboard.html', 'UWorld')}
      </div>

      <div class="nav-right">
        <button class="nav-exam-pill" id="nav-exam-pill" onclick="openDateModal()">
          <span class="nav-exam-icon">◷</span>
          <span id="nav-exam-label">Set Exam Date</span>
        </button>
        <button id="auth-btn" class="nav-auth-btn" onclick="handleAuthClick()">
          <span id="auth-btn-label">Sign In</span>
        </button>
      </div>

    </div>
  </nav>`;

  const dateModal = `
  <div class="modal-overlay" id="date-modal">
    <div class="modal">
      <div class="modal-header">
        <div>
          <div class="modal-title">Set Exam Date</div>
          <div class="modal-sub">Countdown and daily goals update automatically. Sign in to sync across devices.</div>
        </div>
        <button class="btn-cancel" style="padding:6px 10px;border-radius:8px;" onclick="closeDateModal()">✕</button>
      </div>
      <label>Exam Date</label>
      <input type="date" id="date-input"/>
      <div class="modal-btns">
        <button class="btn-cancel" onclick="closeDateModal()">Cancel</button>
        <button class="btn-save" onclick="saveDateModal()">Save ✦</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', nav + dateModal);

  // Update auth button state — called from app.js via updateNavAuth()
  window.updateNavAuth = function (user) {
    const btn   = document.getElementById('auth-btn');
    const label = document.getElementById('auth-btn-label');
    if (!btn) return;
    if (user) {
      label.textContent = 'Signed In';
      btn.title = 'Click to sign out';
      btn.classList.add('nav-auth-signed-in');
    } else {
      label.textContent = 'Sign In';
      btn.title = '';
      btn.classList.remove('nav-auth-signed-in');
    }
  };
})();

// ── Auth click handler ─────────────────────────────────────────
function handleAuthClick() {
  if (!window.auth) return;
  if (window.currentUser) {
    window.auth.signOut().catch(console.error);
  } else {
    const provider = new firebase.auth.GoogleAuthProvider();
    window.auth.signInWithPopup(provider).catch(err => {
      console.error('Sign in failed:', err);
      alert('Sign in failed: ' + err.message);
    });
  }
}
