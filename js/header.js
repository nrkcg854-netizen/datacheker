document.addEventListener("DOMContentLoaded", () => {

  const header = document.createElement("header");
  header.className = "site-header";

  header.innerHTML = `
    <div class="header-container">

      <div class="logo">
        <img src="images/header.webp" alt="ギガチェッカー" class="logo-image">
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href="/tools/data-checker/">ツール</a></li>
          <li><a href="/articles/">節約記事</a></li>
          <li><a href="/blog/">ブログ</a></li>
        </ul>
      </nav>

      <button class="theme-toggle" aria-label="テーマ切替">🌙</button>

    </div>
  `;

  document.body.prepend(header);

});
