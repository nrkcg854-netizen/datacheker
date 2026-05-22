// /js/header.js

const headerTarget =
  document.getElementById("header-outlet") ||
  document.getElementById("header");

if (headerTarget) {
  headerTarget.innerHTML = `
  <header class="site-header">
    <div class="header-container">

      <a href="/" class="logo">
        <img
          src="/images/header.webp"
          alt="ギガ使用ペースチェッカー"
          class="logo-image"
          width="240"
          height="60"
          decoding="async"
        >
      </a>

      <nav class="main-nav">
        <ul>
          <li><a href="/">ホーム</a></li>
          <li><a href="/tools/data-checker/">診断ツール</a></li>
          <li><a href="/articles/">節約記事</a></li>
        </ul>
      </nav>

      <button
        class="theme-toggle"
        id="themeToggle"
        aria-label="ダークモード切り替え"
      >
        🌙
      </button>

    </div>
  </header>
  `;
}