const STYLE_ID = 'avol-react-mermaid-styles'

const CSS = `
/* ── wrapper ──────────────────────────────────────────────── */
.react-mermaid-wrapper {
  position: relative;
  overflow: hidden;
  background: transparent;
  box-sizing: border-box;
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
}

.react-mermaid-toolbar--bottom {
  bottom: 8px;
  right: 8px;
  flex-direction: column;
}

.react-mermaid-toolbar button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  transition: background 150ms ease, box-shadow 150ms ease;
  line-height: 1;
}

.react-mermaid-toolbar button:hover {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.react-mermaid-toolbar button:focus-visible {
  outline: 2px solid #01696f;
  outline-offset: 2px;
}

/* ── error banner ─────────────────────────────────────────── */
.react-mermaid-error {
  padding: 12px 16px;
  border-radius: 6px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  font-family: monospace;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  transition: background 150ms ease;
}

.react-mermaid-error:hover {
  background: #fee2e2;
}

/* ── fullscreen ───────────────────────────────────────────── */
.react-mermaid-fullscreen {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  z-index: 9998;
  background: #fff;
  border-radius: 0 !important;
}

/* ── modal overlay ────────────────────────────────────────── */
.react-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
  box-sizing: border-box;
}

/* ── modal box ────────────────────────────────────────────── */
.react-modal {
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  max-width: 540px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
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
  color: #111827;
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
  color: #6b7280;
  transition: background 150ms ease;
}

.react-modal-close:hover {
  background: #f3f4f6;
  color: #111827;
}

.react-modal-close:focus-visible {
  outline: 2px solid #01696f;
  outline-offset: 2px;
}

.react-modal-body {
  color: #374151;
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
