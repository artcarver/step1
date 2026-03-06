/* nav.js — injects shared navigation, Firebase SDK, and auth.js */

// ── Firebase SDK ───────────────────────────────────────────────
(function injectFirebase() {
  const scripts = [
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js',
  ];
  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src; s.defer = true;
    document.head.appendChild(s);
  });
  const authScript = document.createElement('script');
  authScript.src = 'auth.js';
  document.head.appendChild(authScript);
})();

// ── Nav + Modal ────────────────────────────────────────────────
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  function navLink(href, label) {
    const active = currentPage === href ? ' active' : '';
    return `<a class="nav-link${active}" href="${href}">${label}</a>`;
  }

  const nav = `
  <nav class="nav">
    <div class="nav-inner">

      <a class="nav-brand" href="index.html">
        <svg class="nav-brand-petal" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="9" cy="4.5" rx="3" ry="4.5" fill="#e8a0a8" opacity=".9" transform="rotate(0 9 9)"/>
          <ellipse cx="9" cy="4.5" rx="3" ry="4.5" fill="#e8a0a8" opacity=".75" transform="rotate(72 9 9)"/>
          <ellipse cx="9" cy="4.5" rx="3" ry="4.5" fill="#e8a0a8" opacity=".75" transform="rotate(144 9 9)"/>
          <ellipse cx="9" cy="4.5" rx="3" ry="4.5" fill="#e8a0a8" opacity=".75" transform="rotate(216 9 9)"/>
          <ellipse cx="9" cy="4.5" rx="3" ry="4.5" fill="#e8a0a8" opacity=".75" transform="rotate(288 9 9)"/>
          <circle cx="9" cy="9" r="2.2" fill="#d4606e"/>
        </svg>
        <span class="nav-brand-text">Step 1</span>
      </a>

      <div class="nav-divider"></div>

      <div class="nav-links">
        ${navLink('index.html', 'Home')}
        ${navLink('drugfacts.html', 'Drug Facts')}
        ${navLink('microfacts.html', 'Micro Facts')}
        ${navLink('sketchy-pharm.html', 'Sketchy Pharm')}
        ${navLink('sketchy-micro.html', 'Sketchy Micro')}
        ${navLink('pixorize.html', 'Pixorize')}
        ${navLink('dashboard.html', 'Dashboard')}
      </div>

      <div class="nav-right">
        <button class="nav-exam-pill" id="nav-exam-pill" onclick="openDateModal()">
          <span class="nav-exam-icon">◷</span>
          <span id="nav-exam-label">Set Exam Date</span>
        </button>
        <button id="auth-btn" class="nav-auth-btn" onclick="handleAuthClick()">
          <span id="auth-btn-avatar" class="nav-auth-avatar" style="display:none;"></span>
          <span id="auth-btn-label" style="overflow:hidden;text-overflow:ellipsis;min-width:0;">Sign In</span>
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

  // Update auth button when user state changes (called from auth.js)
  window.updateNavAuth = function (user) {
    const btn   = document.getElementById('auth-btn');
    const label = document.getElementById('auth-btn-label');
    const avatar = document.getElementById('auth-btn-avatar');
    if (!btn) return;
    if (user) {
      const name = user.displayName ? user.displayName.split(' ')[0] : 'Account';
      label.textContent = name;
      if (user.photoURL) {
        avatar.style.backgroundImage = `url(${user.photoURL})`;
        avatar.style.display = 'inline-block';
      }
      btn.title = 'Sign out';
      btn.classList.add('nav-auth-signed-in');
    } else {
      label.textContent = 'Sign In';
      avatar.style.display = 'none';
      btn.title = '';
      btn.classList.remove('nav-auth-signed-in');
    }
  };

  // Update exam pill countdown
  window.updateNavPill = function (daysLeft) {
    const lbl = document.getElementById('nav-exam-label');
    if (!lbl) return;
    if (daysLeft !== null && daysLeft !== undefined) {
      lbl.textContent = daysLeft + 'd remaining';
    } else {
      lbl.textContent = 'Set Exam Date';
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
