// パンくずリスト自動生成
const breadcrumbConfig = {
  // articles/
  '3gb-mobile-data': {
    category: '節約記事',
    title: '月3GBで足りる人の特徴と節約術'
  },
  'save-data-youtube': {
    category: '節約記事',
    title: 'YouTubeのデータ通信量を節約する方法'
  },
  'save-data-sns': {
    category: '節約記事',
    title: 'SNSのデータ通信量を節約する方法'
  },
  'how-to-check-data-android': {
    category: '設定方法',
    title: 'Androidでデータ使用量を確認する方法'
  },
  'android-data-saver': {
    category: '設定方法',
    title: 'Androidのデータセーバー機能の使い方'
  },
  'android-data-warning': {
    category: '設定方法',
    title: 'Androidでデータ通信量の警告を設定する方法'
  },
  'wifi-only-update': {
    category: '設定方法',
    title: 'アプリ更新をWi-Fi時のみにする方法'
  },
  'offline-maps': {
    category: '節約記事',
    title: 'オフライン地図でデータ通信量を節約'
  },
  'iphone-check-data': {
    category: '設定方法',
    title: 'iPhoneでデータ使用量を確認する方法'
  },
  'iphone-low-data-mode': {
    category: '設定方法',
    title: 'iPhoneの低データモードの使い方'
  },
  
  // blog/ （ブログ記事用）
  // 例: ブログ記事を追加する場合はここに追加
  // 'development-story': {
  //   category: 'ブログ',
  //   title: 'このサイトを作ったきっかけ'
  // }
};

function renderBreadcrumb() {
  const path = location.pathname;
  const pageKey = path.match(/\/([^/]+)\.html$/)?.[1];
  
  if (!pageKey || !breadcrumbConfig[pageKey]) return;
  
  const config = breadcrumbConfig[pageKey];
  const depth = (path.match(/\//g) || []).length;
  const prefix = depth === 2 ? '../' : depth === 3 ? '../../' : '';
  
  // articlesかblogか判定
  const isBlog = path.includes('/blog/');
  const categoryUrl = isBlog ? `${prefix}blog/blog.html` : `${prefix}articles/`;
  
  const breadcrumbHTML = `
    <nav aria-label="パンくずリスト" class="container" style="margin-top: 1.5rem;">
      <ol style="display: flex; gap: 0.5rem; list-style: none; font-size: 0.875rem; color: var(--text-muted); flex-wrap: wrap;">
        <li><a href="${prefix}index.html">ホーム</a></li>
        <li>›</li>
        <li><a href="${categoryUrl}">${config.category}</a></li>
        <li>›</li>
        <li aria-current="page">${config.title}</li>
      </ol>
    </nav>
  `;
  
  const header = document.querySelector('header');
  if (header) {
    header.insertAdjacentHTML('afterend', breadcrumbHTML);
  }
}

document.addEventListener('DOMContentLoaded', renderBreadcrumb);
