document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
    <footer class="footer">
      <div style="max-width: 768px; margin: 0 auto;">
        <nav style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 20px; margin-bottom: 30px; font-weight: 600;">
          <a href="/">TOP</a>
          <a href="/tools/data-checker/">ツール</a>
          <a href="/articles/">節約記事</a>
          <a href="/blog/">ブログ</a>
          <a href="/profile.html">運営者・このサイトについて</a>
          <a href="/contact.html">問合せ</a>
          <a href="/privacy.html">プライバシーポリシー</a>
          <a href="/terms.html">利用規約</a>
          <a href="/sitemap.html">サイトマップ</a>
        </nav>

        <div style="color: #6b7280; font-size: 0.875rem;">
          <p>&copy; 2026 ギガ使用ペースチェッカー by <a href="/profile.html">kyon</a></p>
          <p style="margin-top: 8px;">所在地: 鳥取県米子市</p>
        </div>
      </div>
    </footer>
  `;

  // ★ bodyタグ内の「一番最後」に直接挿入する
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
