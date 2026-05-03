// intersection-observer.js - スクロール連動アニメーション用

document.addEventListener('DOMContentLoaded', () => {
  // スクロール連動フェードイン
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // カード要素を監視
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });

  // 画像遅延読み込み
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });

  // ダークモード切替（localStorage連携）
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // 初期表示時のボタンテキスト設定
  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // ボタンのテキストを切り替え
      themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }

  // フォーカストラップ（モーダル用）
  const focusableElements = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
  
  // カラーコントラスト警告（開発時のみ）
  if (window.location.hostname === 'localhost') {
    console.log('アクセシビリティチェック: カラーコントラスト比を確認してください');
  }
});
