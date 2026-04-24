const fs = require('fs');
const path = require('path');

// 記事ディレクトリのパス（jsディレクトリから見た相対パス）
const articlesDir = path.join(__dirname, '..', 'articles');
const articlesJsonPath = path.join(__dirname, '..', 'articles.json');

console.log('📂 Scanning articles directory...');

// articlesディレクトリが存在しない場合のエラーハンドリング
if (!fs.existsSync(articlesDir)) {
  console.error(`❌ Articles directory not found: ${articlesDir}`);
  process.exit(1);
}

// 記事ファイルを取得
const files = fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.html') && file !== 'index.html');

const articles = files.map(file => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // タイトルを抽出
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch 
    ? titleMatch[1].replace(/\s*[|｜].*$/, '').trim() 
    : file.replace('.html', '');
  
  // descriptionを抽出
  const descMatch = content.match(/<meta name="description" content="(.*?)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // 公開日を抽出
  const dateMatch = content.match(/"datePublished":\s*"(\d{4}-\d{2}-\d{2})"/);
  const date = dateMatch ? dateMatch[1] : null;
  
  return {
    filename: file,
    title,
    description,
    date,
    type: 'article'
  };
})
.sort((a, b) => {
  // 日付が新しい順にソート
  if (!a.date) return 1;
  if (!b.date) return -1;
  return new Date(b.date) - new Date(a.date);
});

// JSONファイルに書き出し
fs.writeFileSync(articlesJsonPath, JSON.stringify(articles, null, 2), 'utf-8');

console.log('✅ articles.json generated successfully!');
console.log(`   Found ${articles.length} articles`);
