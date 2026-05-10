document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('popular-articles');

  if (!container) return;

  try {
    const response = await fetch('/articles.json');
    const articles = await response.json();

    const latestArticles = articles.slice(0, 3);

    container.innerHTML = latestArticles.map(article => `
      <article class="feature-card">
        <h3>
          <a href="/articles/${article.filename}">
            ${article.title}
          </a>
        </h3>

        <p>${article.description}</p>
      </article>
    `).join('');

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <p style="text-align:center;">
        記事を読み込めませんでした
      </p>
    `;
  }
});
