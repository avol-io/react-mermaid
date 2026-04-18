import { useState } from 'react'
import { SectionLabel } from './DemoSection'

const MANAGERS = ['npm', 'yarn', 'pnpm', 'bun'] as const
type PM = typeof MANAGERS[number]

const INSTALL_CMD: Record<PM, string> = {
  npm:  'npm install @avol-io/react-mermaid\nnpm install react react-dom mermaid react-zoom-pan-pinch',
  yarn: 'yarn add @avol-io/react-mermaid\nyarn add react react-dom mermaid react-zoom-pan-pinch',
  pnpm: 'pnpm add @avol-io/react-mermaid\npnpm add react react-dom mermaid react-zoom-pan-pinch',
  bun:  'bun add @avol-io/react-mermaid\nbun add react react-dom mermaid react-zoom-pan-pinch',
}

const USAGE_CODE = `import { MermaidDiagram } from '@avol-io/react-mermaid'

export function App() {
  return (
    <MermaidDiagram
      chart={\`
        graph TD
          A[Start] --> B{Decision}
          B -- Yes --> C[Done]
          B -- No  --> D[Retry]
      \`}
      width="100%"
      height="400px"
    />
  )
}`

export function InstallSection() {
  const [pm, setPm] = useState<PM>('npm')
  const [copied, setCopied] = useState<'install' | 'usage' | null>(null)

  const copy = (text: string, key: 'install' | 'usage') => {
    void navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1800)
  }

  return (
    <section id="install" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <SectionLabel>Get started</SectionLabel>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>
          Install & use
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 40, maxWidth: 480 }}>
          Drop it into any React 19 project. No CSS import needed — styles are injected automatically.
        </p>

        {/* package manager tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {MANAGERS.map(m => (
            <button
              key={m}
              onClick={() => setPm(m)}
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                border: '1px solid',
                borderColor: pm === m ? 'var(--brand)' : 'var(--border)',
                background: pm === m ? 'var(--brand-dim)' : 'transparent',
                color: pm === m ? 'var(--brand-light)' : 'var(--text-muted)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                transition: 'all 120ms',
                fontFamily: 'var(--mono)',
              }}
            >
              {m}
            </button>
          ))}
        </div>

        <CodeBlock
          code={INSTALL_CMD[pm]}
          language="bash"
          onCopy={() => copy(INSTALL_CMD[pm], 'install')}
          copied={copied === 'install'}
        />

        <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Usage</h3>
        <CodeBlock
          code={USAGE_CODE}
          language="tsx"
          onCopy={() => copy(USAGE_CODE, 'usage')}
          copied={copied === 'usage'}
        />

        {/* props table */}
        <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 40, marginBottom: 16 }}>Props</h3>
        <PropsTable />
      </div>
    </section>
  )
}

function CodeBlock({ code, language, onCopy, copied }: {
  code: string; language: string; onCopy: () => void; copied: boolean
}) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      background: '#0d1117',
      overflow: 'hidden',
      marginBottom: 8,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 14px',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>{language}</span>
        <button
          onClick={onCopy}
          style={{
            padding: '3px 10px', borderRadius: 6,
            border: '1px solid var(--border)',
            background: 'transparent',
            color: copied ? 'var(--brand-light)' : 'var(--text-muted)',
            fontSize: 12, cursor: 'pointer',
            transition: 'color 150ms',
            fontFamily: 'var(--font)',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '16px 18px',
        fontSize: 13, lineHeight: 1.7,
        color: '#c9d1d9',
        overflowX: 'auto',
        fontFamily: 'var(--mono)',
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

const PROPS = [
  { name: 'chart',              type: 'string',         default: 'required',    desc: 'Mermaid source text' },
  { name: 'width',              type: 'string',         default: '"100%"',     desc: 'CSS width of the container' },
  { name: 'height',             type: 'string',         default: '"400px"',    desc: 'CSS height of the container' },
  { name: 'config',             type: 'MermaidConfig',  default: '—',           desc: 'Options forwarded to mermaid.initialize()' },
  { name: 'enableDownloadSvg',  type: 'boolean',        default: 'true',        desc: 'Show "SVG" in download dropdown' },
  { name: 'enableDownloadMmd',  type: 'boolean',        default: 'true',        desc: 'Show ".mmd" in download dropdown' },
  { name: 'enableDrawio',       type: 'boolean',        default: 'true',        desc: 'Show "Open in draw.io" button' },
]

function PropsTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%', borderCollapse: 'collapse',
        fontSize: 13, fontFamily: 'var(--font)',
      }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 12px',
                color: 'var(--text-muted)', fontWeight: 600, fontSize: 11,
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PROPS.map((p, i) => (
            <tr key={p.name} style={{
              borderBottom: '1px solid var(--border)',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
            }}>
              <td style={{ padding: '10px 12px' }}>
                <code style={{ color: 'var(--brand-light)', fontFamily: 'var(--mono)', fontSize: 12 }}>{p.name}</code>
              </td>
              <td style={{ padding: '10px 12px' }}>
                <code style={{ color: '#ce9178', fontFamily: 'var(--mono)', fontSize: 12 }}>{p.type}</code>
              </td>
              <td style={{ padding: '10px 12px' }}>
                <code style={{ color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>{p.default}</code>
              </td>
              <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{p.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
