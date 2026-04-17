```javascript
document.addEventListener("DOMContentLoaded", function() {
  const headerHTML = `
    <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 0; position: sticky; top: 0; z-index: 100;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding-top: 0; padding-bottom: 0;">
        <a href="/" style="text-decoration: none; color: #0f2b5b; font-weight: 800; font-size: 1.25rem; letter-spacing: -0.05em;">
          ギガ使用ペース<span style="color: #10b981;">チェッカー</span>
        </a>
        <nav class="header-nav" style="display: flex; gap: 1.5rem;">
          <a href="/tools/data-checker/" style="text-decoration: none; color: #1f2937; font-size: 0.9rem; font-weight: 600;">ツール</a>
          <a href="/articles/" style="text-decoration: none; color: #1f2937; font-size: 0.9rem; font-weight: 600;">記事一覧</a>
        </nav>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});

```
