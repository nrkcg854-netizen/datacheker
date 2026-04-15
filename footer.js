// footer.js
const footerStyles = `
<style>
  .footer {
    background-color: #f8f9fa;
    border-top: 1px solid #ddd;
    padding: 30px 10px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
  }
  .footer-content {
    max-width: 600px;
    margin: 0 auto;
  }
  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 12px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: #333;
  }
  .footer-nav a {
    text-decoration: none;
    color: #111;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .footer-nav span {
    color: #ccc;
    font-weight: normal;
  }
  .footer-copy {
    font-size: 0.8rem;
    color: #666;
    margin-top: 15px;
  }
  .footer-copy a {
    color: #666;
    text-decoration: underline;
  }
</style>
`;

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
  document.head.insertAdjacentHTML("beforeend", footerStyles);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
