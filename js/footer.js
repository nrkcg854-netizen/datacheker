document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-content">

      <!-- メイン導線 -->
      <div class="footer-group main-links">
        <a href="/" class="footer-link strong">Top</a>
        <a href="/tools/data-checker/" class="footer-link strong">診断ツール</a>
        <a href="/articles/" class="footer-link strong">節約記事</a>
      </div>

      <!-- サイト情報 -->
      <div class="footer-group sub-links">
        <a href="/about.html" class="footer-link">このサイトについて</a>
        <a href="/blog/" class="footer-link">開発ブログ</a>
        <a href="/contact.html" class="footer-link">お問い合わせ</a>
      </div>

      <!-- 法務 -->
      <div class="footer-group legal-links">
        <a href="/privacy.html" class="footer-link">プライバシーポリシー</a>
        <a href="/terms.html" class="footer-link">利用規約</a>
        <a href="/sitemap.html" class="footer-link">サイトマップ</a>
      </div>

      <p class="footer-copy">
        &copy; 2026 ギガ使用ペースチェッカー by kyon
      </p>

    </div>
  `;

  document.body.appendChild(footer);
});
