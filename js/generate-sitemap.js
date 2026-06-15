const fs = require('fs');
const path = require('path');

// 独自ドメインを取得した場合は、ここをご自身の独自ドメイン（https://xxx.com）に書き換えてください
const BASE_URL = 'https://gigapace-checker.vercel.app';

// サイトマップに絶対に入れたくないフォルダ一覧
const EXCLUDE_DIRS = [
  'node_modules',
  '.git',
  '.vercel',
  '.github',
  'js',
  'css',
  'images'
];

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        getAllHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      // 特定の除外したいHTML（テスト用やプライバシーポリシー等、検索に出さなくていいものがあればここに追加可能）
      if (file !== 'test.html' && file !== 'template.html') {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function generateSitemap() {
  const htmlFiles = getAllHtmlFiles('.');
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  htmlFiles.forEach(file => {
    // Windows環境の「\」を「/」に統一
    let cleanPath = file.replace(/\\/g, '/');

    // 先頭の「.」や余計なスラッシュを綺麗に掃除して、フォルダ名から始まる形にする
    cleanPath = cleanPath.replace(/^\.\//, '').replace(/^\//, '');

    // index.html はURLの末尾に不要なのでカットする
    if (cleanPath.endsWith('index.html')) {
      cleanPath = cleanPath.replace('index.html', '');
    }

    // 末尾の余計なスラッシュを調整し、BASE_URLと綺麗に結合（必ずドメイン直後に / が入るようにする）
    // 例: articles/save-data-youtube.html -> https://xxx/articles/save-data-youtube.html
    // 例: (トップページの場合 空文字) -> https://xxx/
    const url = `${BASE_URL}/${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");

    // 優先度と更新頻度の割り振り
    let priority = '0.5';
    let changefreq = 'monthly';

    if (url === `${BASE_URL}/`) {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (url.includes('/tools/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (url.includes('/articles/')) {
      priority = '0.8';
      changefreq = 'weekly'; // 既存記事の最適化フェーズなのでweeklyがおすすめ
    }

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  fs.writeFileSync('sitemap.xml', xml, 'utf8');
  console.log(`✅ sitemap.xml 正常生成完了（合計: ${htmlFiles.length} 件のURL）`);
}

generateSitemap();
