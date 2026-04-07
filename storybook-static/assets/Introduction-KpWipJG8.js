import{j as e}from"./index-DlsUSzcD.js";import{u as i,M as s}from"./blocks-DcXAg8ln.js";import"./preload-helper-6RYryEeC.js";import"./iframe-DXs5R4h1.js";import"./index-D0yhU19k.js";function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"avolioreact-mermaid",children:"@avol.io/react-mermaid"}),`
`,e.jsxs(n.p,{children:["A React component that renders ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://mermaid.js.org/",rel:"nofollow",children:"Mermaid"})}),` diagrams from text input,
with built-in `,e.jsx(n.strong,{children:"zoom and pan"}),", ",e.jsx(n.strong,{children:"fullscreen"}),", and an ",e.jsx(n.strong,{children:"error modal"})," for invalid syntax."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @avol.io/react-mermaid
`})}),`
`,e.jsx(n.h3,{id:"peer-dependencies",children:"Peer dependencies"}),`
`,e.jsxs(n.p,{children:["This package ships ",e.jsx(n.strong,{children:"without"})," its core dependencies bundled. Install them alongside:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install react react-dom mermaid react-zoom-pan-pinch
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Peer dependency"}),e.jsx(n.th,{children:"Required version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"react"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:">=19"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"react-dom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:">=19"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"mermaid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:">=11"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"react-zoom-pan-pinch"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:">=3"})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MermaidDiagram } from '@avol.io/react-mermaid'

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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"chart"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"required"}),e.jsx(n.td,{children:"Mermaid source text"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"width"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"100%"'})}),e.jsx(n.td,{children:"CSS width of the container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"height"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"400px"'})}),e.jsx(n.td,{children:"CSS height of the container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"config"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MermaidConfig"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["Options forwarded to ",e.jsx(n.code,{children:"mermaid.initialize()"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["No CSS import needed. On first render a single ",e.jsx(n.code,{children:'<style id="avol-react-mermaid-styles">'}),` tag is
injected into `,e.jsx(n.code,{children:"<head>"})," and reused by all instances."]}),`
`,e.jsx(n.p,{children:"Override styles with higher specificity:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.react-mermaid-toolbar button { background: #your-brand-color; }
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsxs(n.p,{children:["GPL-3.0-or-later © ",e.jsx(n.a,{href:"https://avol.io",rel:"nofollow",children:"avol.io"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/avol-io/react-mermaid",rel:"nofollow",children:"GitHub"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@avol.io/react-mermaid",rel:"nofollow",children:"npm"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mermaid.js.org/",rel:"nofollow",children:"Mermaid docs"})}),`
`]})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{a as default};
