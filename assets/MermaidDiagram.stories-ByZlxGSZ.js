import{M as A}from"./MermaidDiagram-DWcC0Zhe.js";import"./index-DlsUSzcD.js";import"./iframe-DXs5R4h1.js";import"./preload-helper-6RYryEeC.js";const F={title:"Components/MermaidDiagram",component:A,tags:["autodocs"],args:{width:"640px",height:"380px"}},a={args:{chart:`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]`}},r={args:{chart:`sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice-)John: See you later!`}},e={args:{chart:`classDiagram
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
  }`}},n={name:"Parse Error (modal)",args:{chart:"this is not valid mermaid !!!",height:"160px"}};var s,o,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    chart: \`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]\`
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    chart: \`sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice-)John: See you later!\`
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,l,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Parse Error (modal)',
  args: {
    chart: 'this is not valid mermaid !!!',
    height: '160px'
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const E=["Flowchart","SequenceDiagram","ClassDiagram","ParseError"];export{e as ClassDiagram,a as Flowchart,n as ParseError,r as SequenceDiagram,E as __namedExportsOrder,F as default};
