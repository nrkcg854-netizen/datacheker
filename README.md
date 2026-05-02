✔ 更新版 README.md（2026年5月）

# ギガ使用ペースチェッカー

スマホの通信量消費ペースを診断する無料Webツールと、
通信量節約の実践ノウハウを提供する記事サイト。

---

## 基本情報

| 項目 | 内容 |
|---|---|
| サイト名 | ギガ使用ペースチェッカー |
| URL | https://gigapace-checker.vercel.app |
| 運営者 | kyon |
| ホスティング | Vercel（GitHub連携） |

---

## プロジェクト構造

/ ├── index.html ├── about.html ├── contact.html ├── sitemap.xml ├── sitemap.html │ ├── style.css ├── footer.css │ ├── js/ │   ├── header.js │   ├── footer.js │   ├── analytics.js │   ├── main.js │   ├── breadcrumb.js │   ├── cta.js │   ├── generate-list.js │   ├── generate-blog-list.js │   └── generate-sitemap.js │ ├── tools/ │   └── data-checker/ │       └── index.html │ ├── articles/ │   ├── index.html（記事一覧・自動生成） │   └── *.html │ ├── blog/ │   ├── index.html │   └── *.html │ ├── articles.json ├── blog.json

---

## 設計思想（重要）

### ① UI設計
- Teal & Amber Haze デザイン
- 丸みカード + グラデーション
- モバイルファースト
- ダークモード（全ページ共通）

---

### ② コンポーネント設計

| 要素 | 管理方法 |
|---|---|
| Header | `header.js` |
| Footer | `footer.js` |
| CTA | `cta.js` |
| パンくず | `breadcrumb.js` |
| 記事一覧 | JSON + JS自動生成 |

👉 **HTMLは構造だけ持つ**

---

### ③ パス設計（重要ルール）

```text
CSS: /style.css
JS: /js/*.js
リンク: /articles/, /tools/

👉 必ず絶対パス


---

導線設計（最重要）

ユーザーの基本動線：

TOP → 診断ツール → 節約記事

各ページの役割

ページ	役割

TOP	診断へ誘導
ツール	判定・興味喚起
記事	解決・深掘り
記事	再度ツールへ戻す


👉 往復導線でCVを最大化


---

記事設計ルール

必須構造

1. 冒頭CTA（診断誘導）


2. 本文


3. 内部リンク（記事一覧 or 関連記事）


4. 記事下CTA




---

NG

情報だけで終わる記事

ツールに繋がらない記事



---

デザインシステム

カラー

変数	値

--teal	#0f766e
--teal-light	#14b8a6
--amber	#d97706
--amber-light	#fbbf24



---

特徴

グラデーションUI

柔らかいシャドウ

高可読性タイポグラフィ

適度な余白設計（詰めすぎない）



---

SEO / AIO

実装済み

canonical

robots

OGP

JSON-LD

Article

FAQ

HowTo

WebApplication


sitemap.xml

Search Console登録済



---

内部SEO

記事 → 診断リンク

記事 → 記事一覧リンク

TOP → 記事導線あり



---

自動化

項目	方法

記事一覧	articles.json
ブログ一覧	blog.json
サイトマップ	自動生成



---

収益化

Google AdSense（申請予定）

記事 → ツール導線でCV最大化

将来的にアフィリエイト導入可能



---

現在の進行状況

完了

UI統一（Teal & Amber）

JSコンポーネント化

記事一覧自動化

ダークモード

SEO基盤


進行中

index.html最適化

footer統一

導線強化



---

今後の優先タスク

最優先

[ ] 診断結果ページの最適化（CV改善）

[ ] TOPページのCV強化


次

[ ] 記事追加（月2〜4本）

[ ] AdSense申請


任意

[ ] SNS流入導線

[ ] A/Bテスト



---

開発ルール

HTMLは構造のみ

UIはCSS

共通要素はJS

絶対パス必須

勝手な改善は禁止（設計崩壊防止）



---

まとめ

このサイトは

👉「ツールサイト」ではなく
👉「診断を中心とした導線設計サイト」


---

目的：

ユーザーに行動させること（診断）

---

# ✔ 正直な評価

2ヶ月前：
- 「記事サイト＋ツール」

現在：
- **「導線設計されたプロダクト」**

---

# ✔ 重要なズレ修正

昔：
> 記事を書く

今：
> **記事でユーザーを動かす**

---

# ✔ 次に詰めるべき

かなり重要：

- 診断結果UI（ここが収益の核）
- TOPの1スクロール目

---

必要なら  
👉「READMEをチーム開発レベルまで拡張」  
👉「運用マニュアル化」  

ここまで一気に仕上げることもできる。
