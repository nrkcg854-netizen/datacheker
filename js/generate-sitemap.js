const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gigapace-checker.vercel.app';
const EXCLUDE = ['node_modules', '.git', '.vercel', 'google655ae524b1f665cf.html'];

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !EXCLUDE.includes(file)) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function generateSitemap() {
  const htmlFiles = getAllHtmlFiles('.');
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  htmlFiles.forEach(file => {
    const urlPath = file.replace(/\\/g, '/').replace('./', '/').replace('index.html', '');
    const url = `${BASE_URL}${urlPath}`;
    
    let priority = '0.5';
    let changefreq = 'monthly';
    
    if (file.includes('index.html') && !file.includes('/')) {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (file.includes('tools/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (file.includes('articles/')) {
      priority = '0.8';
      changefreq = 'monthly';
    }
    
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });
  
  xml += `</urlset>`;
  
  fs.writeFileSync('sitemap.xml', xml);
  console.log('✅ sitemap.xml generated successfully!');
}

generateSitemap();
