const headerTarget =
  document.getElementById("header-outlet") ||
  document.getElementById("header");

if (headerTarget) {
  headerTarget.innerHTML = `
  <header class="site-header">
    <div class="header-container">

      <a href="/" class="logo">
        <img
          src="/images/header.webp"
          alt="ギガ使用ペースチェッカー"
          class="logo-image"
          width="1636"
          height="392"
          decoding="async"
        >
      </a>

    </div>
  </header>
  `;
}
