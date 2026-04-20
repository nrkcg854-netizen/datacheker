// CTAセクション自動生成
function renderCTA() {
  const path = location.pathname;
  const depth = (path.match(/\//g) || []).length;
  const prefix = depth === 2 ? '../' : depth === 3 ? '../../' : '';
  
  const ctaHTML = `
    <section class="cta-section">
      <p class="cta-text">あなたは何GB必要？</p>
      <p class="cta-subtext">30秒で診断できます</p>
      <a href="${prefix}tools/data-checker/index.html" class="cta-button">無料で診断する</a>
    </section>
  `;
  
  const ctaContainer = document.getElementById('cta-container');
  if (ctaContainer) {
    ctaContainer.innerHTML = ctaHTML;
  }
}

document.addEventListener('DOMContentLoaded', renderCTA);
