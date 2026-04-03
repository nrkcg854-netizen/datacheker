// フッター一元管理スクリプト
(function() {
  const footerHTML = `
<style>
.site-footer {
  background: var(--surface);
  border-top: 3px solid var(--ink);
  padding: 40px 20px 28px;
  margin-top: 60px;
}
.footer-content {
  max-width: 800px;
  margin: 0 auto;
}
.footer-logo {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: var(--ink);
  margin-bottom: 12px;
  letter-spacing: -.01em;
}
.footer-desc {
  font-size: 13px;
  color: var(--sub);
  line-height: 1.6;
  margin-bottom: 28px;
}
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}
.footer-link {
  font-size: 13px;
  color: var(--ink);
  text-decoration: none;
  padding: 10px 12px;
  background: var(--bg);
  border: 2.5px solid var(--ink);
  border-radius: 10px;
  font-weight: 700;
  transition: all .12s;
  box-shadow: 3px 3px 0 var(--ink);
  display: block;
  text-align: center;
}
body.dark .footer-link {
  background: var(--ink);
  color: var(--yellow);
}
.footer-link:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--ink);
}
.footer-copy {
  text-align: center;
  font-size: 11px;
  color: var(--sub);
  padding-top: 24px;
  border-top: 2px solid var(--border);
  letter-spacing: .02em;
}
</style>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-logo">📶 ギガ使用ペースチェッカー</div>
    <p class="footer-desc">
      スマホの通信量ペースを無料診断。月末までに足りるか、今日使える量は？を瞬時に判定します。
    </p>
    
    <div class="footer-links">
      <a href="/tools/data-checker/" class="footer-link">📊 ペース診断ツール</a>
      <a href="/articles/" class="footer-link">📚 節約記事一覧</a>
      <a href="/about.html" class="footer-link">ℹ️ サイトについて</a>
      <a href="/contact.html" class="footer-link">✉️ お問い合わせ</a>
    </div>
    
    <div class="footer-copy">
      © 2025 ギガ使用ペースチェッカー by kyon
    </div>
  </div>
</footer>
`;

  // ページ読み込み完了後にフッターを挿入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertFooter);
  } else {
    insertFooter();
  }

  function insertFooter() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
})();
