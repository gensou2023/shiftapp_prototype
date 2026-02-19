# フロントエンドエージェント

## 役割

シフト最適化アプリの HTML / CSS / JavaScript 実装を担当する。
デモ版は静的ファイル構成、本番版（竹プラン以降）ではフレームワーク移行を見据える。

## 担当領域

- HTML 構造設計（セマンティック HTML）
- CSS スタイリング（CSS Variables + レスポンシブ）
- JavaScript インタラクション（Vanilla JS）
- シフト生成アルゴリズムの実装・改善
- レスポンシブ対応（モバイルファースト）

## 技術スタック

### デモ版（現行）

| 項目 | 技術 | 備考 |
|------|------|------|
| マークアップ | HTML5 | セマンティック要素を積極使用 |
| スタイル | CSS3 + CSS Variables | デザイントークン管理 |
| インタラクション | Vanilla JS | ライブラリ不使用 |
| データ | app.js 内に直接定義 | 85名のスタッフデータ |
| デプロイ | Cloudflare Pages | 静的ホスティング |

### 本番版（竹プラン移行時）

| 項目 | 候補技術 | 備考 |
|------|---------|------|
| フレームワーク | Next.js (React) | SSR + API Routes |
| スタイル | Tailwind CSS or CSS Modules | トークン体系は引き継ぐ |
| DB | Supabase / Cloudflare D1 | スタッフ・シフトデータ |
| 認証 | Supabase Auth | 管理者・リーダー・スタッフの3ロール |

## ファイル構成（現行）

```
index.html  (463行)  ← HTMLマークアップのみ（SPA風タブ切り替え）
style.css   (1040行) ← デザイントークン + 全コンポーネントスタイル
app.js      (1599行) ← 全ロジック + 85名スタッフデータ
```

### 画面構成

| 画面 | page ID | 主要機能 |
|------|---------|---------|
| ダッシュボード | page-dashboard | KPI・タイムライン・3スロットサマリー・アラート |
| スタッフ一覧 | page-staff | カード一覧・検索・フィルタ・編集モーダル・CSV取込 |
| AIシフト生成 | page-generate | 3アルゴリズム比較・欠勤シミュレーション・週間ビュー |
| シフトカレンダー | page-calendar | 月間グリッド + モバイルリスト + 日付詳細パネル |

## CSS 設計方針

### トークンファースト

```css
/* OK — トークンを使う */
.card { background: var(--color-surface); border-radius: var(--radius-md); }

/* NG — ハードコード禁止 */
.card { background: #fafafa; border-radius: 8px; }
```

### レスポンシブ（3ブレイクポイント）

| ブレイクポイント | 対象 | 主な調整 |
|---------------|------|---------|
| max-width: 1024px | タブレット | シフト生成が1カラムに |
| max-width: 768px | スマホ横 | ナビ縮小、カレンダーリスト優先 |
| max-width: 480px | スマホ縦 | ブランド名非表示、モーダル全画面化 |

## JavaScript 設計方針

### データフロー

```
app.js 内 _raw 配列（コンパクトフォーマット）
    ↓ staffData へ展開
    ↓ staffHash() で決定論的データ生成（入社日・スキル推移・部署異動）
    ↓ render 関数群で DOM 更新
```

### シフト生成アルゴリズム（3種）

| アルゴリズム | 関数名 | ソート基準 |
|------------|--------|-----------|
| 効率重視 | algoEfficiency() | skillLevel × weight 降順 |
| コスト最小 | algoCostMin() | hourlyRate 昇順 |
| バランス | algoBalanced() | ベテラン1名 + 高低交互配置 |

### 主要関数一覧

| カテゴリ | 関数 | 概要 |
|---------|------|------|
| ナビゲーション | switchPage() | タブ切り替え |
| スタッフ | renderStaffGrid(), searchStaff(), openStaffModal() | 一覧・検索・編集 |
| シフト生成 | generateShift(), buildResultHTML() | AI生成・結果表示 |
| 欠勤対応 | showAbsencePanel(), getReplacements() | 欠勤シミュレーション |
| 確定・労務 | confirmShift(), checkLaborRisks() | シフト確定・警告 |
| 週間ビュー | generateWeeklyShifts(), switchView() | 6日分一括生成 |
| カレンダー | renderCalendar(), showCalendarDetail() | 月間表示・詳細 |
| ダッシュボード | renderTodaySummary(), renderAlertFeed() | タイムライン・通知 |
| 設定 | openSettingsModal(), updateSetting() | 表示・通知設定 |
| CSV | handleCsvFileSelect(), applyCsvData() | CSV取込 |

## パフォーマンス考慮事項

- 外部ライブラリ不使用（Google Fonts のみ CDN）
- CSS アニメーションは `transform` / `opacity` を優先（GPU 最適化）
- 決定論的データ生成（staffHash / mulberry32）で再描画時の一貫性を担保
- テーブルデータは DOM に直接描画（85名規模では仮想スクロール不要）

## コーディング規約

- テンプレートリテラルまたは文字列結合で HTML 生成
- デモ版では `var` も許容（本番移行時に `const` / `let` に統一）
- コメントはセクション区切り（`/* ===== Section ===== */`）で可読性確保
- 日本語UI テキストはコード内に直接記述（i18n は本番版で検討）
