const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'https://gigapace-checker.vercel.app';

// クロール対象外ディレクトリ
const EXCLUDE_DIRS = [
  'node_modules',
  '.git',
  '.github',
  '.vercel',
  'css',
  'images',
  'js'
];

// サイトマップへ載せないHTML
const EXCLUDE_FILES = [
  'test.html',
  'template.html',
  'google655ae524b1f665cf.html'
];

// HTMLファイル取得
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        getAllHtmlFiles(filePath, fileList);
      }
    } else if (
      file.endsWith('.html') &&
      !EXCLUDE_FILES.includes(file)
    ) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Gitの最終コミット日取得
function getGitLastModified(file) {
  try {
    const date = execSync(
      `git log -1 --format=%cs -- "${file}"`,
      { encoding: 'utf8' }
    ).trim();

    if (date) return date;
  } catch (e) {
    // git履歴取得失敗時は現在日付へフォールバック
  }

  return new Date().toISOString().split('T')[0];
}

function generateSitemap() {

  const htmlFiles = getAllHtmlFiles('.').sort();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  htmlFiles.forEach(file => {

    let cleanPath = file.replace(/\\/g, '/');
    cleanPath = cleanPath.replace(/^\.\//, '').replace(/^\//, '');

    // index.html → ディレクトリURL
    if (cleanPath.endsWith('index.html')) {
      cleanPath = cleanPath.replace(/index\.html$/, '');
    }

    const url = `${BASE_URL}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');

    const lastmod = getGitLastModified(file);

    let priority = '0.5';
    let changefreq = 'monthly';

    if (url === `${BASE_URL}/`) {
      priority = '1.0';
      changefreq = 'weekly';
    }
    else if (url.includes('/tools/')) {
      priority = '0.9';
      changefreq = 'weekly';
    }
    else if (url.includes('/articles/')) {
      priority = '0.8';
      changefreq = 'weekly';
    }
    else if (url.includes('/blog/')) {
      priority = '0.7';
      changefreq = 'monthly';
    }

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  fs.writeFileSync('sitemap.xml', xml, 'utf8');

  console.log(`✅ sitemap.xml生成完了（${htmlFiles.length}件）`);
}

generateSitemap();
