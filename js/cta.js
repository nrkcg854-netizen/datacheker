// /js/cta.js

document.addEventListener("DOMContentLoaded", () => {

  const CTA_HTML = `
  <div class="card cta-card">
    <p style="font-weight:600; margin-bottom:8px;">
      今のギガ消費ペースを確認
    </p>
    <a href="/tools/data-checker/" class="btn-primary">
      診断する →
    </a>
  </div>
  `;

  const article = document.querySelector(".article-content .prose");
  if (!article) return;

  const children = article.children;

  // ===== 上部CTA（最初のpの後）=====
  for (let el of children) {
    if (el.tagName === "P") {
      el.insertAdjacentHTML("afterend", CTA_HTML);
      break;
    }
  }

  // ===== 下部CTA（最後のh2の前 or 最後に追加）=====
  let lastH2 = null;
  for (let el of children) {
    if (el.tagName === "H2") lastH2 = el;
  }

  if (lastH2) {
    lastH2.insertAdjacentHTML("beforebegin", CTA_HTML);
  } else {
    article.insertAdjacentHTML("beforeend", CTA_HTML);
  }

});
