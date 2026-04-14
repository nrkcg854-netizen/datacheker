const fs = require('fs');
const path = require('path');

// フォルダのパス設定（blogディレクトリを指定）
const blogDir = path.join(__dirname, 'blog');
const outputFile = path.join(__dirname, 'blog.json');

// blogフォルダ内のファイルを読み込む
const files = fs.readdirSync(blogDir);
const blogList = [];

files.forEach(file => {
    // HTMLファイルのみを対象にする
    if (path.extname(file) === '.html' && file !== 'index.html') {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // <title>タグの中身を抜き出す
        const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
        let title = "タイトルなし";
        
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].trim();
            // 一覧をスッキリさせるため、サイト名を削る（不要ならこの1行は消してOKです）
            title = title.replace('｜ギガ使用ペースチェッカー', '');
        }

        // リストに追加
        blogList.push({
            filename: file,
            title: title
        });
    }
});

// blog.json というファイル名で保存する
fs.writeFileSync(outputFile, JSON.stringify(blogList, null, 2));
console.log('ブログ一覧データ(blog.json)の作成が完了しました！');
