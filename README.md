# @avol-io/react-mermaid

> React component that renders [Mermaid](https://mermaid.js.org/) diagrams with zoom, pan, and fullscreen support.

[![Storybook](https://img.shields.io/badge/Storybook-docs-ff4785?logo=storybook&logoColor=white)](https://www.avol.io/react-mermaid/)
[![npm](https://img.shields.io/npm/v/@avol-io/react-mermaid?color=cb3837&logo=npm)](https://www.npmjs.com/package/@avol-io/react-mermaid)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

---

## Installation

```bash
npm install @avol-io/react-mermaid
```

### Peer dependencies

```bash
npm install react react-dom mermaid react-zoom-pan-pinch
```

| Package | Required version |
|---|---|
| `react` | `>=19` |
| `react-dom` | `>=19` |
| `mermaid` | `>=11` |
| `react-zoom-pan-pinch` | `>=3` |

---

## Usage

```tsx
import { MermaidDiagram } from '@avol-io/react-mermaid'

export function App() {
  return (
    <MermaidDiagram
      chart={`
        graph TD
          A[Start] --> B{Decision}
          B -- Yes --> C[Done]
          B -- No  --> D[Skip]
      `}
      width="100%"
      height="400px"
    />
  )
}
```

---

## API

### MermaidDiagram

| Prop | Type | Default | Description |
|---|---|---|---|
| `chart` | `string` | required | Mermaid source text |
| `width` | `string` | `"100%"` | CSS width of the container |
| `height` | `string` | `"400px"` | CSS height of the container |
| `config` | `MermaidConfig` | — | Options forwarded to `mermaid.initialize()` |

### Modal

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `"Error"` | Modal heading |
| `onClose` | `() => void` | required | Called on Escape, overlay click, or close button |
| `children` | `ReactNode` | required | Modal body content |

---

## Styling

No CSS import required. On first render a `<style id="avol-react-mermaid-styles">` tag is injected
into `<head>` once and reused by all instances.

Override styles with higher specificity:

```css
.react-mermaid-toolbar button { background: #your-color; }
.react-mermaid-error          { border-color: #your-color; }
```

---

## Live docs

https://www.avol.io/react-mermaid/

---

## License

GPL-3.0-or-later &copy; [avol.io](https://avol.io)
