const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'articles');
const outputFile = path.join(__dirname, 'articles.json');

const files = fs.readdirSync(articlesDir);
const articleList = [];

files.forEach(file => {
    if (path.extname(file) === '.html' && file !== 'index.html') {
        const filePath = path.join(articlesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // タイトルの抽出
        const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
        let title = titleMatch ? titleMatch[1].replace('｜ギガ使用ペースチェッカー', '').trim() : "タイトルなし";
        
        // ディスクリプション（説明文）の抽出
        const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
        let description = descMatch ? descMatch[1].trim() : "記事の説明がありません。";

        // 公開日（<time datetime="...">）の抽出
        const timeMatch = content.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>/i);
        let date = timeMatch ? timeMatch[1].trim() : "";

        articleList.push({
            filename: file,
            title: title,
            description: description,
            date: date
        });
    }
});

// 日付が新しい順に並び替える（降順ソート）
articleList.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(articleList, null, 2));
console.log('✅ articles.json に説明文と日付を追加し、最新順にソートしました。');
