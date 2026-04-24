const fs = require('fs');
const path = require('path');

// ブログディレクトリのパス（jsディレクトリから見た相対パス）
const blogDir = path.join(__dirname, '..', 'blog');
const blogJsonPath = path.join(__dirname, '..', 'blog.json');

console.log('📂 Scanning blog directory...');

// blogディレクトリが存在しない場合のエラーハンドリング
if (!fs.existsSync(blogDir)) {
  console.warn(`⚠️ Blog directory not found: ${blogDir}`);
  console.log('Creating empty blog.json...');
  fs.writeFileSync(blogJsonPath, JSON.stringify([], null, 2), 'utf-8');
  console.log('✅ Empty blog.json created');
  process.exit(0);
}

// ブログファイルを取得
const files = fs.readdirSync(blogDir)
  .filter(file => file.endsWith('.html') && file !== 'index.html' && file !== 'blog.html');

const blogPosts = files.map(file => {
  const filePath = path.join(blogDir, file);
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
    type: 'blog'
  };
})
.sort((a, b) => {
  // 日付が新しい順にソート
  if (!a.date) return 1;
  if (!b.date) return -1;
  return new Date(b.date) - new Date(a.date);
});

// JSONファイルに書き出し
fs.writeFileSync(blogJsonPath, JSON.stringify(blogPosts, null, 2), 'utf-8');

console.log('✅ blog.json generated successfully!');
console.log(`   Found ${blogPosts.length} blog posts`);
