import{j as e}from"./index-DlsUSzcD.js";import{u as i,M as s}from"./blocks-nf4f-yah.js";import"./preload-helper-6RYryEeC.js";import"./iframe-CcbW0v1j.js";import"./index-CWrVlNau.js";function n(r){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction"}),`
`,e.jsx(d.h1,{id:"avol-ioreact-mermaid",children:"@avol-io/react-mermaid"}),`
`,e.jsxs(d.p,{children:["A React component that renders ",e.jsx(d.strong,{children:e.jsx(d.a,{href:"https://mermaid.js.org/",rel:"nofollow",children:"Mermaid"})}),` diagrams from text input,
with built-in `,e.jsx(d.strong,{children:"zoom, pan, directional controls"}),", ",e.jsx(d.strong,{children:"fullscreen"}),", ",e.jsx(d.strong,{children:"download"}),` (SVG, .mmd),
`,e.jsx(d.strong,{children:"open in draw.io"}),", and an ",e.jsx(d.strong,{children:"error modal"})," for invalid syntax."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-bash",children:`npm install @avol-io/react-mermaid
`})}),`
`,e.jsx(d.h3,{id:"peer-dependencies",children:"Peer dependencies"}),`
`,e.jsxs(d.p,{children:["This package ships ",e.jsx(d.strong,{children:"without"})," its core dependencies bundled. Install them alongside:"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-bash",children:`npm install react react-dom mermaid react-zoom-pan-pinch
`})}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Peer dependency"}),e.jsx(d.th,{children:"Required version"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"react"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:">=19"})})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"react-dom"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:">=19"})})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"mermaid"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:">=11"})})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"react-zoom-pan-pinch"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:">=3"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { MermaidDiagram } from '@avol-io/react-mermaid'

export function App() {
  return (
    <MermaidDiagram
      chart={\`
        graph TD
          A[Start] --> B{Decision}
          B -- Yes --> C[Done]
          B -- No  --> D[Skip]
      \`}
      width="100%"
      height="400px"
    />
  )
}
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"props",children:"Props"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Prop"}),e.jsx(d.th,{children:"Type"}),e.jsx(d.th,{children:"Default"}),e.jsx(d.th,{children:"Description"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"chart"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"required"}),e.jsx(d.td,{children:"Mermaid source text"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"width"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"100%"'})}),e.jsx(d.td,{children:"CSS width of the container"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"height"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"400px"'})}),e.jsx(d.td,{children:"CSS height of the container"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"config"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"MermaidConfig"})}),e.jsx(d.td,{children:"—"}),e.jsxs(d.td,{children:["Options forwarded to ",e.jsx(d.code,{children:"mermaid.initialize()"})]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"enableDownloadSvg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"true"})}),e.jsx(d.td,{children:'Show "SVG" option in the download dropdown'})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"enableDownloadMmd"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"true"})}),e.jsx(d.td,{children:'Show ".mmd" option in the download dropdown'})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"enableDrawio"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"true"})}),e.jsx(d.td,{children:'Show "Open in draw.io" button in the toolbar'})]})]})]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["The download dropdown icon is automatically hidden when both ",e.jsx(d.code,{children:"enableDownloadSvg"}),`
and `,e.jsx(d.code,{children:"enableDownloadMmd"})," are ",e.jsx(d.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx(d.h3,{id:"top-right",children:"Top-right"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Download dropdown"})," — exports the diagram as SVG or ",e.jsx(d.code,{children:".mmd"})," source (each option individually toggleable)"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Open in draw.io"})," — opens the diagram directly in ",e.jsx(d.a,{href:"https://app.diagrams.net",rel:"nofollow",children:"app.diagrams.net"})," using the Mermaid import URL"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Fullscreen"})," — toggles fullscreen overlay"]}),`
`]}),`
`,e.jsx(d.h3,{id:"bottom-right-33-grid",children:"Bottom-right (3×3 grid)"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"Arrow buttons for panning in all four directions"}),`
`,e.jsx(d.li,{children:"Center reset button — fits the diagram back to the container"}),`
`,e.jsx(d.li,{children:"Zoom in / Zoom out"}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(d.p,{children:["No CSS import needed. On first render a single ",e.jsx(d.code,{children:'<style id="avol-react-mermaid-styles">'}),` tag is
injected into `,e.jsx(d.code,{children:"<head>"})," and reused by all instances."]}),`
`,e.jsxs(d.p,{children:["All colors and sizes are exposed as ",e.jsx(d.strong,{children:"CSS custom properties"})," on ",e.jsx(d.code,{children:":root"}),`. Override them globally
or scope them to a specific instance:`]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-css",children:`/* global theme override */
:root {
  --mermaid-toolbar-bg: rgba(30, 30, 30, 0.85);
  --mermaid-toolbar-color: #f9fafb;
  --mermaid-toolbar-hover-bg: #1f2937;
  --mermaid-border-color: #374151;
  --mermaid-border-radius: 12px;
  --mermaid-fullscreen-bg: #111827;
}
`})}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Token"}),e.jsx(d.th,{children:"Default"}),e.jsx(d.th,{children:"Controls"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"transparent"})}),e.jsx(d.td,{children:"container background"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-border-color"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"rgba(0,0,0,0.12)"})}),e.jsx(d.td,{children:"container border"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-border-radius"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"8px"})}),e.jsx(d.td,{children:"container corner radius"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-toolbar-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"rgba(255,255,255,0.9)"})}),e.jsx(d.td,{children:"button background"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-toolbar-color"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#374151"})}),e.jsx(d.td,{children:"button icon color"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-toolbar-hover-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#ffffff"})}),e.jsx(d.td,{children:"button hover background"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-toolbar-focus-ring"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#01696f"})}),e.jsx(d.td,{children:"focus outline color"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-toolbar-btn-size"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"30px"})}),e.jsx(d.td,{children:"button width & height"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-dropdown-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#ffffff"})}),e.jsx(d.td,{children:"dropdown panel background"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-dropdown-item-hover"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#f3f4f6"})}),e.jsx(d.td,{children:"dropdown item hover"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-error-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#fef2f2"})}),e.jsx(d.td,{children:"error banner background"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-error-color"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#dc2626"})}),e.jsx(d.td,{children:"error banner text"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"--mermaid-fullscreen-bg"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"#ffffff"})}),e.jsx(d.td,{children:"fullscreen overlay background"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"license",children:"License"}),`
`,e.jsxs(d.p,{children:["MIT © ",e.jsx(d.a,{href:"https://avol.io",rel:"nofollow",children:"avol.io"})]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:e.jsx(d.a,{href:"https://github.com/avol-io/react-mermaid",rel:"nofollow",children:"GitHub"})}),`
`,e.jsx(d.li,{children:e.jsx(d.a,{href:"https://www.npmjs.com/package/@avol-io/react-mermaid",rel:"nofollow",children:"npm"})}),`
`,e.jsx(d.li,{children:e.jsx(d.a,{href:"https://mermaid.js.org/",rel:"nofollow",children:"Mermaid docs"})}),`
`]})]})}function x(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{x as default};
