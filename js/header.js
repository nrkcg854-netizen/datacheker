// header.js
document.addEventListener("DOMContentLoaded", function () {

  const headerHTML = `
    <header class="site-header">
      <div class="header-container">

        <a href="/" class="logo" aria-label="ホームへ戻る">
          <span class="logo-icon">📊</span>
          <span class="logo-text">ギガ使用ペースチェッカー</span>
        </a>

        <button class="mobile-menu-toggle"
          aria-label="メニューを開く"
          aria-controls="mainNav"
          aria-expanded="false">
          <span class="hamburger"></span>
        </button>

        <nav class="main-nav" id="mainNav" aria-label="メインナビゲーション">
          <ul>
            <li><a href="/tools/data-checker/">ツール</a></li>
            <li><a href="/articles/">節約記事</a></li>
            <li><a href="/blog/">ブログ</a></li>
            <li><a href="/about.html">About</a></li>
          </ul>
        </nav>

        <button class="theme-toggle" aria-label="ダークモード切替">
          <span class="theme-icon">🌙</span>
        </button>

      </div>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  /* ===== モバイルメニュー ===== */
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute(
        'aria-label',
        isOpen ? 'メニューを閉じる' : 'メニューを開く'
      );
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ===== ダークモード ===== */
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');

  if (themeToggle && themeIcon) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
      const now = document.documentElement.getAttribute('data-theme');
      const next = now === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  /* ===== 現在ページハイライト ===== */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (currentPath === href || currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });

});
