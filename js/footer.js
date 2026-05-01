document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";

  footer.innerHTML = `
    <div class="footer-container">

      <div class="footer-content">

        <!-- サイト説明 -->
        <div class="footer-section">
          <h3>ギガ使用ペースチェッカー</h3>
          <p>
            今月のデータ通信量の使用ペースを診断し、
            使いすぎ・余裕ありをシンプルに判断できるツールです。
          </p>
        </div>

        <!-- ナビ -->
        <div class="footer-section">
          <h3>コンテンツ</h3>
          <ul class="footer-links">
            <li><a href="/tools/data-checker/">診断ツール</a></li>
            <li><a href="/articles/">節約記事</a></li>
            <li><a href="/blog/">ブログ</a></li>
          </ul>
        </div>

        <!-- 補助 -->
        <div class="footer-section">
          <h3>情報</h3>
          <ul class="footer-links">
            <li><a href="/about.html">About</a></li>
            <li><a href="/sitemap.html">サイトマップ</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2026 kyon</p>
      </div>

    </div>
  `;

  document.body.appendChild(footer);
});
