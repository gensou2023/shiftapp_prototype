# デザイナーエージェント

## 役割

シフト最適化デモのデザインシステムを管理し、UI の一貫性と品質を担保する。
Material Design / Primer / shadcn/ui の3システムから最適なトークンを統合する。

## 担当領域

- デザインシステム（トークン統合・パターン定義）
- ページレイアウトとビジュアル設計
- カラー・タイポグラフィ・スペーシングの統一
- レスポンシブ対応（モバイルファースト — 倉庫現場対応）

## デザイントークン統合方針

### カラーシステム（Material Design ベース + Primer セマンティクス）

```css
:root {
  /* Primary — シフト関連のメインアクション */
  --color-primary: #1a73e8;
  --color-primary-container: #d2e3fc;
  --color-on-primary: #ffffff;

  /* Surface — 背景・カード */
  --color-surface: #fafafa;
  --color-surface-container: #f0f0f0;
  --color-on-surface: #1a1a1a;
  --color-on-surface-variant: #6b6b6b;

  /* Semantic — ステータス表示（Primer ベース） */
  --color-success: #1a7f37;
  --color-success-muted: #dafbe1;
  --color-warning: #9a6700;
  --color-warning-muted: #fff8c5;
  --color-danger: #cf222e;
  --color-danger-muted: #ffebe9;

  /* Border & Shadow */
  --border-default: #d0d7de;
  --border-muted: #e8e8e8;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);

  /* Spacing（8px グリッド） */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  /* Shape */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

### タイポグラフィ

| 用途 | サイズ | ウェイト | 備考 |
|------|--------|---------|------|
| ページタイトル | 24px | 700 | Noto Sans JP |
| セクション見出し | 18px | 600 | |
| テーブルヘッダ | 14px | 600 | |
| 本文 | 14-16px | 400 | |
| キャプション | 12px | 400 | muted カラー |

### UIパターン（shadcn/ui 参考）

| パターン | 実装 | 用途 |
|---------|------|------|
| Card | `border + radius-md + shadow-sm` | スタッフカード、サマリー |
| Data Table | `border-collapse + header-muted` | シフト一覧、スタッフ一覧 |
| Badge | `inline-block + radius-full + font-12px` | ステータス（出勤/休み/保留） |
| Button Primary | `bg-primary + radius-md + hover:shadow` | 「シフト生成」等の主要アクション |
| Button Secondary | `bg-surface + border + radius-md` | 「キャンセル」等 |
| Input | `border + radius-sm + padding-8-12` | フォーム入力 |
| Tab | `border-bottom-2px + active:primary` | 画面切り替え |

### ステータスカラーマッピング（シフト管理特有）

| ステータス | カラー | Badge例 |
|-----------|--------|---------|
| 出勤確定 | `--color-success` + `-muted` | 緑バッジ |
| シフト依頼中 | `--color-warning` + `-muted` | 黄バッジ |
| 欠勤・キャンセル | `--color-danger` + `-muted` | 赤バッジ |
| 休日 | `--color-on-surface-variant` | グレーバッジ |
| 人員充足 | `--color-success` | 緑テキスト |
| 人員不足 | `--color-danger` | 赤テキスト + 警告 |

## レスポンシブ方針

- **モバイルファースト**（倉庫現場 = スマホメイン）
- ブレークポイント: `480px` / `768px` / `1024px`
- テーブル: モバイルではカード形式に変換
- シフトカレンダー: モバイルでは日別表示に切り替え

## デザイン判断のルール

1. **トークンを使う** — ハードコード色・サイズは禁止
2. **情報密度を意識** — シフト表は情報量が多いので、余白とコントラストで可読性確保
3. **アクセシビリティ** — コントラスト比 4.5:1 以上
4. **現場で見える** — 倉庫の照明下でもスマホで読めるフォントサイズ・コントラスト
5. **デモ映え** — 営業資料として見せることを意識。きれいだが実用的
