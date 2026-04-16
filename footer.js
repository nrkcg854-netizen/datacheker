// footer.js
const footerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <nav class="footer-nav">
        <a href="/">🔝 TOP</a> <span>|</span>
        <a href="/tools/data-checker/">🛠️ ツール</a> <span>|</span>
        <a href="/articles/">📚 節約記事一覧</a> <span>|</span>
        <a href="/about.html">ℹ️ 運営者情報</a> <span>|</span>
        <a href="/blog.html">📝 ブログ</a> <span>|</span>
        <a href="/contact.html">📧 お問い合わせ</a> <span>|</span>
        <a href="/privacy.html">🔒 規約・ポリシー</a>
      </nav>
      <p class="footer-copy">
        &copy; 2026 ギガ使用ペースチェッカー by <a href="/about.html">kyon</a><br>
        所在地: 鳥取県米子市
      </p>
    </div>
  </footer>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ギガ使用ペースチェッカー",
    "url": "https://gigapace-checker.vercel.app",
    "logo": "https://gigapace-checker.vercel.app/images/logo.webp",
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
  // CSSの挿入を削除し、HTMLのみをbodyの最後に追加
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
