# フロントエンドエージェント

## 役割

シフト最適化デモの HTML / CSS / JavaScript 実装を担当する。
静的ファイル構成で、デザイントークンを活用した高品質なUIを構築する。

## 担当領域

- HTML 構造設計（セマンティック HTML）
- CSS スタイリング（CSS Variables + レスポンシブ）
- JavaScript インタラクション（バニラ JS or Alpine.js）
- サンプルデータの表示・操作ロジック

## 技術スタック

| 項目 | 技術 | 備考 |
|------|------|------|
| マークアップ | HTML5 | セマンティック要素を積極使用 |
| スタイル | CSS3 + CSS Variables | デザイントークン管理 |
| インタラクション | Vanilla JS / Alpine.js | 軽量に保つ |
| データ | JSON（静的） | sample-shifts.json |
| デプロイ | Cloudflare Pages | 静的ホスティング |

## ファイル構成

```
index.html          ← エントリーポイント（SPA風にタブ切り替え）
├── <section id="staff">     スタッフ一覧
├── <section id="generate">  シフト自動生成
└── <section id="calendar">  シフトカレンダー
style.css           ← デザイントークン + コンポーネントスタイル
app.js              ← データ読み込み・UI操作・シフト生成ロジック
data/
└── sample-shifts.json ← サンプルデータ
```

## HTML 構造方針

```html
<!-- セマンティック HTML を基本とする -->
<header>   → ナビゲーション・タブ切り替え
<main>     → コンテンツエリア
<section>  → 各画面（タブで切り替え）
<table>    → データテーブル（thead/tbody 必須）
<form>     → 入力フォーム（label と input の紐付け必須）
<footer>   → 松竹梅プラン案内・コピーライト
```

## CSS 設計方針

### トークンファースト

```css
/* OK — トークンを使う */
.card { background: var(--color-surface); border-radius: var(--radius-md); }

/* NG — ハードコード禁止 */
.card { background: #fafafa; border-radius: 8px; }
```

### クラス命名（BEM ライク）

```css
.staff-card { }
.staff-card__name { }
.staff-card__badge { }
.staff-card--active { }

.shift-table { }
.shift-table__header { }
.shift-table__row { }
.shift-table__row--highlight { }
```

### レスポンシブ

```css
/* モバイルファースト */
.staff-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .staff-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .staff-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## JavaScript 設計方針

### データフロー

```
sample-shifts.json
    ↓ fetch()
App State（メモリ上のオブジェクト）
    ↓ render()
DOM 更新
```

### シフト生成ロジック（コア機能）

```javascript
// 入力: 出荷量スコア
// 処理: スタッフのスキルレベル × 出勤可能日 × 重み付け で最適な組み合わせを算出
// 出力: 推奨シフト案

function generateOptimalShift(shipmentScore, availableStaff, date) {
  // 1. 当日出勤可能なスタッフをフィルタ
  // 2. スキルスコアの合計が shipmentScore を満たす組み合わせを探索
  // 3. コスト最小（人数最小 or 重み付け最適）な組み合わせを返す
}
```

### イベント処理

- タブ切り替え: `click` イベントで `<section>` の表示/非表示
- シフト生成: フォーム `submit` イベントでロジック実行
- テーブルソート: ヘッダ `click` でカラムソート

## パフォーマンス考慮事項

- 外部ライブラリは最小限（CDN 読み込み）
- CSS アニメーションは `transform` / `opacity` のみ（GPU 最適化）
- テーブルデータは DOM に直接描画（仮想スクロール不要な規模）

## コーディング規約

- `const` / `let` を使用（`var` 禁止）
- テンプレートリテラルで HTML 生成
- エラーハンドリング: `try-catch` で fetch エラーを捕捉
- コメント: ロジックの「なぜ」を書く（「何を」は書かない）
