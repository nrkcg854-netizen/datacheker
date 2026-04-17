```javascript
document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
    <footer class="footer">
      <div style="max-width: 768px; margin: 0 auto;">
        <nav style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 20px; margin-bottom: 30px; font-weight: 600;">
          <a href="/" style="text-decoration: none; color: #0f2b5b;">TOP</a>
          <a href="/tools/data-checker/" style="text-decoration: none; color: #0f2b5b;">ツール</a>
          <a href="/articles/" style="text-decoration: none; color: #0f2b5b;">節約記事一覧</a>
          <a href="/about.html" style="text-decoration: none; color: #0f2b5b;">運営者情報</a>
          <a href="/blog.html" style="text-decoration: none; color: #0f2b5b;">ブログ</a>
          <a href="/contact.html" style="text-decoration: none; color: #0f2b5b;">お問い合わせ</a>
          <a href="/privacy.html" style="text-decoration: none; color: #0f2b5b;">規約・ポリシー</a>
        </nav>
        <div style="color: #6b7280; font-size: 0.875rem;">
          <p>&copy; 2026 ギガ使用ペースチェッカー by <a href="/about.html" style="color: #6b7280;">kyon</a></p>
          <p style="margin-top: 8px;">所在地: 鳥取県米子市</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});

```
