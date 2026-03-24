# ギガ使用ペースチェッカー

スマホの通信量消費ペースを診断する無料Webツールと、通信量節約の設定方法を解説する記事サイトです。

---

## 基本情報

| 項目 | 内容 |
|---|---|
| サイト名 | ギガ使用ペースチェッカー |
| URL | https://gigapace-checker.vercel.app |
| 運営者 | きょん（kyon） |
| ホスティング | Vercel（GitHubと連携） |

---

## ファイル構成

```
/
├── index.html                        # TOPページ
├── about.html                        # 運営者情報
├── contact.html                      # お問い合わせ（Googleフォーム埋め込み）
├── sitemap.xml                       # サイトマップ
├── google655ae524b1f665cf.html       # Search Console認証ファイル
│
├── tools/
│   └── data-checker/
│       └── index.html                # ギガペース診断ツール
│
└── articles/
    ├── save-data-youtube.html        # YouTubeの通信量を減らす設定方法
    ├── save-data-sns.html            # SNSアプリの通信量を抑える設定
    ├── how-to-check-data-android.html # Androidで通信量を確認する方法
    ├── android-data-saver.html       # Androidのデータセーバー機能とは
    ├── android-data-warning.html     # Androidのデータ警告と制限の設定方法
    ├── wifi-only-update.html         # アプリ更新をWi-Fiのみに制限する方法
    ├── offline-maps.html             # Googleマップをオフライン化する方法
    ├── iphone-check-data.html        # iPhoneで通信量を確認する方法
    └── iphone-low-data-mode.html     # iPhoneの低データモードとは
```

---

## デザインシステム

### カラー
| 変数 | カラーコード | 用途 |
|---|---|---|
| `--yellow` | `#ffe600` | メインアクセント・ヘッダー背景 |
| `--ink` | `#1a1a1a` | テキスト・ボーダー |
| `--bg` | `#f5f5f0` | ページ背景（ドット柄） |
| `--surface` | `#ffffff` | カード背景 |
| `--safe` | `#00e096` | 余裕あり（緑） |
| `--warn` | `#ff9500` | 注意（オレンジ） |
| `--danger` | `#ff3b5c` | 使いすぎ（赤） |

### フォント
- **見出し**：Nunito（900）
- **本文**：Noto Sans JP（400・700・900）

### スタイルの特徴
- 太ボーダー（2.5〜3px）＋ オフセットシャドウ
- ドット背景（24px間隔）
- ダークモード対応（`localStorage` でサイト横断共有）
- ポップ×ニュートラル（10〜20代男女向け）

---

## ターゲットユーザー

- 10〜20代前半（男女）
- iPhoneユーザー・Androidユーザー両方
- 格安SIM・低容量プランを使っている層

---

## コンテンツ方針

- AndroidとiPhoneは**対等に扱う**。どちらが優れているという書き方はしない
- ツール内のTipsや節約情報は**見出し程度に留め**、詳細は記事ページへ誘導する
- 各記事のCTAは必ずツール（`../../tools/data-checker/`）へ誘導する
- 記事は `articles/` フォルダに格納する

---

## SEO・AIO対策

全ページ共通で実施済み。

- `<meta name="description">` キーワード最適化済み
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical">` 正規URL指定
- JSON-LD 構造化データ
  - ツールページ：`WebApplication` スキーマ
  - 手順系記事：`HowTo` スキーマ（ステップ付き）
  - 解説系記事：`Article` スキーマ
- Google Search Console 登録・サイトマップ送信済み

---

## 収益化

- Google AdSense 申請予定（記事10本達成）
- 目標：広告収益でパソコン購入

---

## 記事テンプレートの使い方

`article-template.html` をコピーして以下を書き換えるだけで新しい記事を作成できる。

1. `<title>` タグ
2. `<meta name="description">`
3. JSON-LDの `name` / `description` / `url`
4. `article-hero` のタイトル・カテゴリ・更新日
5. `summary-box` の3箇条
6. `article-body` の本文・ステップカード
7. `related` の関連記事リンク

---

## 今後のTODO

- [ ] AdSense申請
- [ ] Google Analytics設置
- [ ] 記事を継続的に追加（月2〜4本）
- [ ] TOPページの記事一覧に新記事を追加
- [ ] sitemap.xmlに新記事URLを追加
