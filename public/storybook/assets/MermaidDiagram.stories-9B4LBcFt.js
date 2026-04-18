import{M as y}from"./MermaidDiagram-Dg3ARUc1.js";import"./index-DlsUSzcD.js";import"./iframe-CcbW0v1j.js";import"./preload-helper-6RYryEeC.js";const B={title:"Components/MermaidDiagram",component:y,tags:["autodocs"],args:{width:"640px",height:"380px",enableDownloadSvg:!0,enableDownloadMmd:!0,enableDrawio:!0}},a={args:{chart:`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]`}},e={args:{chart:`sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice-)John: See you later!`}},r={args:{chart:`classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal : +int age
  Animal : +String gender
  Animal: +mate()
  class Duck{
    +String beakColor
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }`}},n={name:"Parse Error (modal)",args:{chart:"this is not valid mermaid !!!",height:"160px"}},o={name:"Download & draw.io disabled",args:{chart:`graph LR
  A[Input] --> B[Process] --> C[Output]`,enableDownloadSvg:!1,enableDownloadMmd:!1,enableDrawio:!1}},s={name:"SVG download only",args:{chart:`graph LR
  A[Input] --> B[Process] --> C[Output]`,enableDownloadMmd:!1,enableDrawio:!1}};var t,l,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    chart: \`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]\`
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    chart: \`sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice-)John: See you later!\`
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    chart: \`classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal : +int age
  Animal : +String gender
  Animal: +mate()
  class Duck{
    +String beakColor
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }\`
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,D,w;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Parse Error (modal)',
  args: {
    chart: 'this is not valid mermaid !!!',
    height: '160px'
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,C,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Download & draw.io disabled',
  args: {
    chart: \`graph LR
  A[Input] --> B[Process] --> C[Output]\`,
    enableDownloadSvg: false,
    enableDownloadMmd: false,
    enableDrawio: false
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'SVG download only',
  args: {
    chart: \`graph LR
  A[Input] --> B[Process] --> C[Output]\`,
    enableDownloadMmd: false,
    enableDrawio: false
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const G=["Flowchart","SequenceDiagram","ClassDiagram","ParseError","NoToolbar","OnlySvgDownload"];export{r as ClassDiagram,a as Flowchart,o as NoToolbar,s as OnlySvgDownload,n as ParseError,e as SequenceDiagram,G as __namedExportsOrder,B as default};
