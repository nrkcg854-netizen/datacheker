// footer.js
document.addEventListener("DOMContentLoaded", function () {

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-container">

        <div class="footer-content">

          <div class="footer-section">
            <h3>ギガ使用ペースチェッカー</h3>
            <p>スマホの通信量使用ペースを診断し、使いすぎ・余裕ありを判定するツールです。</p>
          </div>

          <div class="footer-section">
            <h3>ツール</h3>
            <ul class="footer-links">
              <li><a href="/tools/data-checker/">ギガペース診断</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>節約記事</h3>
            <ul class="footer-links">
              <li><a href="/articles/">節約記事一覧を見る</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>サイト情報</h3>
            <ul class="footer-links">
              <li><a href="/about.html">About</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/privacy.html">プライバシーポリシー</a></li>
              <li><a href="/terms.html">利用規約</a></li>
              <li><a href="/sitemap.html">サイトマップ</a></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 kyon</p>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
