const STYLE_ID = 'avol-react-mermaid-styles'

const CSS = `
/* ── CSS tokens ───────────────────────────────────────────── */
:root {
  --mermaid-bg: transparent;
  --mermaid-border-color: rgba(0, 0, 0, 0.12);
  --mermaid-border-radius: 8px;

  --mermaid-toolbar-bg: rgba(255, 255, 255, 0.9);
  --mermaid-toolbar-border: rgba(0, 0, 0, 0.12);
  --mermaid-toolbar-color: #374151;
  --mermaid-toolbar-hover-bg: #ffffff;
  --mermaid-toolbar-hover-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --mermaid-toolbar-focus-ring: #01696f;
  --mermaid-toolbar-btn-size: 30px;
  --mermaid-toolbar-btn-radius: 6px;
  --mermaid-toolbar-btn-font-size: 14px;

  --mermaid-dropdown-bg: #ffffff;
  --mermaid-dropdown-border: rgba(0, 0, 0, 0.1);
  --mermaid-dropdown-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  --mermaid-dropdown-item-hover: #f3f4f6;
  --mermaid-dropdown-item-color: #374151;
  --mermaid-dropdown-item-font-size: 13px;

  --mermaid-error-bg: #fef2f2;
  --mermaid-error-border: #fecaca;
  --mermaid-error-color: #dc2626;

  --mermaid-fullscreen-bg: #ffffff;
  --mermaid-fullscreen-zindex: 9998;

  --mermaid-modal-overlay-bg: rgba(0, 0, 0, 0.45);
  --mermaid-modal-bg: #ffffff;
  --mermaid-modal-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  --mermaid-modal-border-radius: 10px;
  --mermaid-modal-title-color: #111827;
  --mermaid-modal-body-color: #374151;
  --mermaid-modal-close-color: #6b7280;
  --mermaid-modal-close-hover-bg: #f3f4f6;
  --mermaid-modal-close-hover-color: #111827;
}

/* ── wrapper ──────────────────────────────────────────────── */
.react-mermaid-wrapper {
  position: relative;
  overflow: hidden;
  background: var(--mermaid-bg);
  box-sizing: border-box;
  border: 1px solid var(--mermaid-border-color);
  border-radius: var(--mermaid-border-radius);
}

/* ── toolbar base ─────────────────────────────────────────── */
.react-mermaid-toolbar {
  position: absolute;
  display: flex;
  gap: 4px;
  z-index: 10;
}

.react-mermaid-toolbar--top {
  top: 8px;
  right: 8px;
  flex-direction: row;
  align-items: center;
}

.react-mermaid-toolbar--bottom {
  bottom: 8px;
  right: 8px;
}

.react-mermaid-toolbar button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: var(--mermaid-toolbar-btn-size);
  height: var(--mermaid-toolbar-btn-size);
  border: 1px solid var(--mermaid-toolbar-border);
  border-radius: var(--mermaid-toolbar-btn-radius);
  background: var(--mermaid-toolbar-bg);
  backdrop-filter: blur(4px);
  cursor: pointer;
  font-size: var(--mermaid-toolbar-btn-font-size);
  font-weight: 500;
  color: var(--mermaid-toolbar-color);
  transition: background 150ms ease, box-shadow 150ms ease;
  line-height: 1;
  padding: 0;
}

.react-mermaid-toolbar button:hover {
  background: var(--mermaid-toolbar-hover-bg);
  box-shadow: var(--mermaid-toolbar-hover-shadow);
}

.react-mermaid-toolbar button:focus-visible {
  outline: 2px solid var(--mermaid-toolbar-focus-ring);
  outline-offset: 2px;
}

/* ── 3x3 grid ─────────────────────────────────────────────── */
.react-mermaid-grid {
  display: grid;
  grid-template-columns: repeat(3, var(--mermaid-toolbar-btn-size));
  grid-template-rows: repeat(3, var(--mermaid-toolbar-btn-size));
  gap: 3px;
}

.react-mermaid-grid > span {
  display: block;
}

/* ── download dropdown ────────────────────────────────────── */
.react-mermaid-dropdown {
  position: relative;
}

.react-mermaid-dropdown > button {
  width: auto;
  padding: 0 8px;
  gap: 4px;
}

.react-mermaid-chevron {
  opacity: 0.6;
}

.react-mermaid-dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: var(--mermaid-dropdown-bg);
  border: 1px solid var(--mermaid-dropdown-border);
  border-radius: var(--mermaid-toolbar-btn-radius);
  box-shadow: var(--mermaid-dropdown-shadow);
  display: flex;
  flex-direction: column;
  min-width: 90px;
  overflow: hidden;
  z-index: 20;
}

.react-mermaid-dropdown-menu button {
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 0;
  background: var(--mermaid-dropdown-bg);
  color: var(--mermaid-dropdown-item-color);
  font-size: var(--mermaid-dropdown-item-font-size);
  padding: 0 12px;
  justify-content: flex-start;
  backdrop-filter: none;
}

.react-mermaid-dropdown-menu button:hover {
  background: var(--mermaid-dropdown-item-hover);
  box-shadow: none;
}

/* ── error banner ─────────────────────────────────────────── */
.react-mermaid-error {
  padding: 12px 16px;
  border-radius: 6px;
  background: var(--mermaid-error-bg);
  border: 1px solid var(--mermaid-error-border);
  color: var(--mermaid-error-color);
  font-family: monospace;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  transition: background 150ms ease;
}

.react-mermaid-error:hover {
  filter: brightness(0.97);
}

/* ── fullscreen ───────────────────────────────────────────── */
.react-mermaid-fullscreen {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  z-index: var(--mermaid-fullscreen-zindex);
  background: var(--mermaid-fullscreen-bg);
  border-radius: 0 !important;
  border: none !important;
}

/* ── modal overlay ────────────────────────────────────────── */
.react-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--mermaid-modal-overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
  box-sizing: border-box;
}

/* ── modal box ────────────────────────────────────────────── */
.react-modal {
  background: var(--mermaid-modal-bg);
  border-radius: var(--mermaid-modal-border-radius);
  padding: 24px;
  max-width: 540px;
  width: 100%;
  box-shadow: var(--mermaid-modal-shadow);
  box-sizing: border-box;
}

.react-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 12px;
}

.react-modal-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--mermaid-modal-title-color);
  margin: 0;
  line-height: 1.4;
}

.react-modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  color: var(--mermaid-modal-close-color);
  transition: background 150ms ease;
}

.react-modal-close:hover {
  background: var(--mermaid-modal-close-hover-bg);
  color: var(--mermaid-modal-close-hover-color);
}

.react-modal-close:focus-visible {
  outline: 2px solid var(--mermaid-toolbar-focus-ring);
  outline-offset: 2px;
}

.react-modal-body {
  color: var(--mermaid-modal-body-color);
  font-size: 14px;
  line-height: 1.6;
  overflow-y: auto;
  max-height: 60vh;
}
`

export function injectStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  document.head.appendChild(style)
}
