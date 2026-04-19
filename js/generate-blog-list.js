const fs = require('fs');
const path = require('path');

// フォルダのパス設定（blogディレクトリを指定）
const blogDir = path.join(__dirname, 'blog');
// 出力ファイルの設定（blog.jsonに出力）
const outputFile = path.join(__dirname, 'blog.json');

// blogフォルダ内のファイルを読み込む
const files = fs.readdirSync(blogDir);
const blogList = [];

files.forEach(file => {
    // HTMLファイルのみを対象にする（index.htmlは一覧自身なので除外）
    if (path.extname(file) === '.html' && file !== 'index.html') {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // タイトルの抽出
        const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
        let title = "タイトルなし";
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].trim();
            // 一覧をスッキリさせるため、サイト名を削る
            title = title.replace('｜ギガ使用ペースチェッカー', '');
        }
        
        // ディスクリプション（説明文）の抽出
        const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
        let description = descMatch ? descMatch[1].trim() : "記事の説明がありません。";

        // 公開日（<time datetime="...">）の抽出
        const timeMatch = content.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>/i);
        let date = timeMatch ? timeMatch[1].trim() : "";

        // リストに追加
        blogList.push({
            filename: file,
            title: title,
            description: description,
            date: date
        });
    }
});

// 日付が新しい順に並び替える（降順ソート）
// ※もし日付（<time>タグ）が書かれていない記事があってもエラーにならないよう処理しています
blogList.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB - dateA;
});

// blog.json というファイル名で保存する
fs.writeFileSync(outputFile, JSON.stringify(blogList, null, 2));
console.log('✅ blog.json に説明文と日付を追加し、最新順にソートしました！');
