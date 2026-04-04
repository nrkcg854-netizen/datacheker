// フッター一元管理スクリプト
(function() {
  const footerHTML = `
<style>
.site-footer {
  background: #ffffff;
  border-top: 3px solid #1a1a1a;
  padding: 40px 20px 28px;
  margin-top: 60px;
}
body.dark .site-footer {
  background: #1e1e1c;
  border-top: 3px solid #ffe600;
}
.footer-content {
  max-width: 800px;
  margin: 0 auto;
}
.footer-logo {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 12px;
  letter-spacing: -.01em;
}
body.dark .footer-logo {
  color: #f0f0e8;
}
.footer-desc {
  font-size: 13px;
  color: #777770;
  line-height: 1.6;
  margin-bottom: 28px;
}
body.dark .footer-desc {
  color: #888880;
}
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}
.footer-link {
  font-size: 13px;
  color: #1a1a1a;
  text-decoration: none;
  padding: 10px 12px;
  background: #f5f5f0;
  border: 2.5px solid #1a1a1a;
  border-radius: 10px;
  font-weight: 700;
  transition: all .12s;
  box-shadow: 3px 3px 0 #1a1a1a;
  display: block;
  text-align: center;
}
body.dark .footer-link {
  background: #1a1a1a;
  color: #ffe600;
  border: 2.5px solid #ffe600;
  box-shadow: 3px 3px 0 #ffe600;
}
.footer-link:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #1a1a1a;
}
body.dark .footer-link:active {
  box-shadow: 1px 1px 0 #ffe600;
}
.footer-copy {
  text-align: center;
  font-size: 11px;
  color: #777770;
  padding-top: 24px;
  border-top: 2px solid #1a1a1a;
  letter-spacing: .02em;
}
body.dark .footer-copy {
  color: #888880;
  border-top: 2px solid #ffe600;
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
