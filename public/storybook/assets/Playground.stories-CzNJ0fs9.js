import{j as e}from"./index-DlsUSzcD.js";import{r as l}from"./iframe-Bc2E9jE5.js";import{M as n}from"./MermaidDiagram-CQAH7qKc.js";import"./preload-helper-6RYryEeC.js";const m=`graph LR
  A[Write diagram] --> B[See it live]
  B --> C{Valid?}
  C -- Yes --> D[Done]
  C -- No  --> E[Check errors]
  E --> A`,f={title:"Components/Playground",parameters:{layout:"fullscreen"}},r={name:"Live editor",render:()=>{const[t,s]=l.useState(m);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif"},children:[e.jsx("div",{style:{flex:1,minHeight:0},children:e.jsx(n,{chart:t,width:"100%",height:"100%"})}),e.jsxs("div",{style:{borderTop:"1px solid #e5e7eb",padding:"12px 16px",background:"#fafafa"},children:[e.jsx("label",{htmlFor:"mermaid-source",style:{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mermaid source"}),e.jsx("textarea",{id:"mermaid-source",value:t,onChange:d=>s(d.target.value),rows:7,spellCheck:!1,style:{width:"100%",fontFamily:"monospace",fontSize:13,padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,resize:"vertical",boxSizing:"border-box",lineHeight:1.6}})]})]})}};var i,a,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Live editor',
  render: () => {
    const [chart, setChart] = useState(INITIAL);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
        <div style={{
        flex: 1,
        minHeight: 0
      }}>
          <MermaidDiagram chart={chart} width="100%" height="100%" />
        </div>
        <div style={{
        borderTop: '1px solid #e5e7eb',
        padding: '12px 16px',
        background: '#fafafa'
      }}>
          <label htmlFor="mermaid-source" style={{
          display: 'block',
          fontSize: 12,
          fontWeight: 600,
          marginBottom: 6,
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Mermaid source
          </label>
          <textarea id="mermaid-source" value={chart} onChange={e => setChart(e.target.value)} rows={7} spellCheck={false} style={{
          width: '100%',
          fontFamily: 'monospace',
          fontSize: 13,
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          resize: 'vertical',
          boxSizing: 'border-box',
          lineHeight: 1.6
        }} />
        </div>
      </div>;
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["LiveEditor"];export{r as LiveEditor,g as __namedExportsOrder,f as default};
