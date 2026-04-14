// footer.js
const footerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-sections">
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-top.webp" alt="🔝" class="footer-icon"> TOP
          </h3>
          <ul class="footer-list">
            <li><a href="/" class="footer-link">TOP</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-tool.webp" alt="🛠️" class="footer-icon"> ツール
          </h3>
          <ul class="footer-list">
            <li><a href="/tools/data-checker/" class="footer-link">ギガ使用ペースチェッカー</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-save-data.webp" alt="📚" class="footer-icon"> 節約記事一覧
          </h3>
          <ul class="footer-list">
            <li><a href="/articles/" class="footer-link">節約記事一覧</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-about.webp" alt="ℹ️" class="footer-icon"> 運営者情報
          </h3>
          <ul class="footer-list">
            <li><a href="/about.html" class="footer-link">運営者情報</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-blog.webp" alt="📚" class="footer-icon"> ブログ
          </h3>
          <ul class="footer-list">
            <li><a href="/blog.html" class="footer-link">ブログ</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-contact.webp" alt="📧" class="footer-icon"> お問い合わせ
          </h3>
          <ul class="footer-list">
            <li><a href="/contact.html" class="footer-link">お問い合わせ</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">
            <img src="/images/icon-policy.webp" alt="🔒" class="footer-icon"> ポリシー
          </h3>
          <ul class="footer-list">
            <li><a href="/privacy.html" class="footer-link">プライバシーポリシー</a></li>
            <li><a href="/terms.html" class="footer-link">利用規約</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-copy">
        &copy; 2026 ギガ使用ペースチェッカー by <a href="/about.html" class="footer-link">kyon</a><br>
        📧 <a href="/contact.html" class="footer-link">お問い合わせ</a><br>
        所在地: 鳥取県米子市
      </p>
    </div>
  </footer>
  <!-- Organization 構造化データ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ギガ使用ペースチェッカー",
    "url": "https://gigapace-checker.vercel.app",
    "logo": "https://gigapace-checker.vercel.app/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "米子市",
      "addressRegion": "鳥取県",
      "addressCountry": "JP"
    },
    "sameAs": [
      "https://gigapace-checker.vercel.app/",
      "https://gigapace-checker.vercel.app/blog.html",
      "https://gigapace-checker.vercel.app/contact.html",
      "https://gigapace-checker.vercel.app/about.html"
    ]
  }
  </script>
`;

document.addEventListener("DOMContentLoaded", function() {
  // bodyの最後にフッターを挿入
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
