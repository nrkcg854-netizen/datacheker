const fs = require('fs');
const path = require('path');

// フォルダのパス設定
const articlesDir = path.join(__dirname, 'articles');
const outputFile = path.join(__dirname, 'articles.json');

// articlesフォルダ内のファイルを読み込む
const files = fs.readdirSync(articlesDir);
const articleList = [];

files.forEach(file => {
    // HTMLファイルのみを対象にする
    if (path.extname(file) === '.html' && file !== 'index.html') {
        const filePath = path.join(articlesDir, file);
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
        articleList.push({
            filename: file,
            title: title
        });
    }
});

// articles.json というファイル名で保存する
fs.writeFileSync(outputFile, JSON.stringify(articleList, null, 2));
console.log('記事一覧データ(articles.json)の作成が完了しました！');
