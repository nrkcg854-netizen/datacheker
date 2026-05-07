// /js/header.js

document.getElementById("header").innerHTML = `
<header class="site-header">
  <div class="header-container">

    <a href="/" class="logo">
      <img src="/images/header.webp" alt="ギガ使用ペースチェッカー" class="logo-image">
    </a>

    <nav class="main-nav">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/tools/data-checker/">診断ツール</a></li>
        <li><a href="/articles">節約記事</a></li>
      </ul>
    </nav>

    <button class="theme-toggle" id="themeToggle">🌙</button>

  </div>
</header>
`;
