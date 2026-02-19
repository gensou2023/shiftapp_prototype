# モバイルコーディングガイドライン

## 目的

モバイル表示の不具合を未然に防ぐための設計・実装ルール。
問題が起きてから対処するのではなく、最初からこのガイドラインに従うことで再発を防止する。

## 対象環境

| 環境 | 最小幅 | 主要ブラウザ | 備考 |
|------|--------|-----------|------|
| iPhone SE | 375px | Safari (WebKit) | iOS Safari固有の挙動あり |
| iPhone 14/15 | 393px | Safari (WebKit) | 主要テスト端末 |
| Android 標準 | 360px | Chrome (Blink) | Samsung Internet含む |
| Android 格安 | 320px | Chrome (Blink) | 最小対応幅 |
| iPad | 768px | Safari | タブレット横持ち含む |

## ブレイクポイント設計

| ブレイクポイント | 対象 | 設計方針 |
|---------------|------|---------|
| > 1024px | デスクトップ | 2カラムレイアウト、sticky サイドバー |
| 768-1024px | タブレット | 1カラム化、パディング縮小 |
| 480-768px | スマホ大 | さらにパディング縮小、フォントサイズ調整 |
| 360-480px | スマホ標準 | グリッド2列を維持、要素の最適化 |
| < 360px | 格安Android | グリッドを1列化、最小限のUI |

## CSS Grid ルール（必須）

### `1fr` ではなく `minmax(0, 1fr)` を使う

```css
/* NG: 子要素のmin-widthでグリッド列が拡張される */
grid-template-columns: 1fr;
grid-template-columns: 300px 1fr;

/* OK: 最小幅を0に制約し、子要素による列拡張を防止 */
grid-template-columns: minmax(0, 1fr);
grid-template-columns: 300px minmax(0, 1fr);
```

**理由:** CSS Gridの `1fr` は暗黙的に `min-width: auto` を持つ。子要素に `min-width: 500px` のようなコンテンツがあると、グリッド列全体がそのサイズに拡張される。`minmax(0, 1fr)` で最小幅を明示的に0にすることで防止。

### レスポンシブブレイクポイントでもminmaxを使う

```css
@media (max-width: 1024px) {
  /* NG */
  .layout { grid-template-columns: 1fr; }

  /* OK */
  .layout { grid-template-columns: minmax(0, 1fr); }
}
```

## Viewport / Overflow ルール（必須）

### html要素にoverflow:hiddenを設定

```css
html {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
```

**理由:** iOS Safariでは `overflow-y: auto` + `overflow-x: hidden` の組み合わせで水平クリッピングが効かない。html要素でviewport拡張自体を防ぐことで、すべての子要素の水平はみ出しを防止。

### 高さにはdvhを使用（vhフォールバック付き）

```css
body {
  height: 100vh;      /* フォールバック */
  height: 100dvh;     /* iOS/Android動的viewport */
}
```

**理由:** `100vh` はiOS Safari/Android Chromeでアドレスバーの高さを含む。`100dvh`（Dynamic Viewport Height）でアドレスバーの表示/非表示に追従。古いブラウザ用に `100vh` を先に記述。

## フォーム要素ルール

### input[type="date"] はネイティブ装飾を除去

```css
input[type="date"] {
  -webkit-appearance: none;
  appearance: none;
  max-width: 100%;
  /* 独自スタイルを適用 */
}
```

**理由:** iOS Safariのdate inputはネイティブ装飾で `width: 100%` を超えることがある。`-webkit-appearance: none` でネイティブ装飾を除去し、カスタムスタイルで制御。日付ピッカーの機能はそのまま動作する。

### すべてのフォーム要素にmax-width:100%

```css
.form-input, .form-select {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
```

## 横スクロールコンテンツのルール

### 固定幅コンテンツはoverflow-x:auto + max-width:100%で囲む

```css
.scrollable-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
}

.scrollable-content {
  min-width: 500px; /* 固定幅が必要なコンテンツ */
}
```

**理由:** タイムラインやテーブルなど固定幅が必要なコンテンツは、必ず `overflow-x: auto` の親で囲む。親に `max-width: 100%` を付けて、viewport幅内に収める。

## テキスト / フォントルール

### モバイルでのフォントサイズ最小値

- 本文テキスト: 12px以上
- ラベル/補助テキスト: 11px以上
- バッジ/チップ内: 10px以上（ただし情報密度が必要な場合のみ）

### 長いテキストの処理

```css
/* 1行に収めたい場合 */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 折り返しを許可する場合 */
.wrap {
  word-break: break-word;
  overflow-wrap: break-word;
}
```

## ボタン / インタラクションルール

### タッチターゲットサイズ

- ボタン・リンクの最小サイズ: **44px x 44px**（Apple HIG推奨）
- ボタン間の最小間隔: 8px

### flexコンテナ内のボタンは必ずflex-wrap:wrap

```css
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
```

## 実装時のチェックリスト

新しいUIコンポーネントを追加する際に確認:

```
- [ ] CSS Gridで `1fr` を使っていないか → `minmax(0, 1fr)` に
- [ ] 固定幅(px)のコンテンツが overflow-x:auto の親に囲まれているか
- [ ] フォーム要素に max-width:100% が設定されているか
- [ ] ボタン/リンクのタッチターゲットが44px以上か
- [ ] 360px幅でレイアウトが崩れないか
- [ ] 動的に追加されるDOM要素も含めて確認したか
```

## iOS / Android 固有の注意事項

### iOS Safari

| 問題 | 対策 |
|------|------|
| overflow-y:auto + overflow-x:hidden で水平クリッピングが効かない | html { overflow: hidden } |
| input[type="date"] がネイティブ装飾で幅を超える | -webkit-appearance: none |
| 100vh がアドレスバー高さを含む | 100dvh を使用 |
| position:sticky がスクロールコンテナ内で不安定 | モバイルでは position:relative に切替 |

### Android Chrome

| 問題 | 対策 |
|------|------|
| 320px幅の格安端末が存在する | 360pxブレイクポイントでグリッド1列化 |
| Samsung Internet の独自挙動 | html { overflow: hidden } で対応済み |
| dvh未対応の古い端末 | vh をフォールバックとして残す |
