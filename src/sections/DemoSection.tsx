
import { useState } from 'react'
import { MermaidDiagram } from '@avol-io/react-mermaid'
import { CodeMirrorEditor } from '../components/CodeMirrorEditor'
import { EXAMPLES } from '../data/examples'

export function DemoSection() {
  const [chart, setChart] = useState(EXAMPLES[0].chart)
  const [selectedExample, setSelectedExample] = useState('0')

  const handleExampleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(e.target.value)
    setSelectedExample(e.target.value)
    setChart(EXAMPLES[idx].chart)
  }

  return (
    <section id="demo" style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel>Live demo</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700,
          letterSpacing: '-0.03em', marginBottom: 8, color: 'var(--text)',
        }}>
          Write Mermaid, see it render
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 32, maxWidth: 520, fontSize: 15 }}>
          Edit the diagram source on the left — the viewer updates live.
        </p>

        {/* responsive grid: side-by-side ≥900px, stacked below */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 16,
          alignItems: 'stretch',
        }}>

          {/* LEFT: editor — grows to fill */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            background: '#1e1e2e',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            minHeight: 460,
          }}>
            {/* editor topbar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 14px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(0,0,0,0.25)',
              gap: 10, flexShrink: 0,
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <Dot color="#ff5f57"/><Dot color="#febc2e"/><Dot color="#28c840"/>
              </div>
              <select
                value={selectedExample}
                onChange={handleExampleChange}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 6, color: '#c9d1d9',
                  fontSize: 12, padding: '4px 10px', cursor: 'pointer',
                  fontFamily: 'var(--font)',
                }}
              >
                {EXAMPLES.map((ex, i) => (
                  <option key={i} value={i} style={{ background: '#1e1e2e' }}>{ex.label}</option>
                ))}
              </select>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--mono)' }}>
                mermaid source
              </span>
            </div>

            <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
              <CodeMirrorEditor value={chart} onChange={setChart} />
            </div>
          </div>

          {/* RIGHT: MermaidDiagram — fixed height, no flex shrink */}
          <div style={{ minHeight: 460, flexShrink: 0 }}>
            <MermaidDiagram
              chart={chart}
              width="100%"
             height="460px"
              config={{ theme: 'default' }}
              className="demo-mermaid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Dot({ color }: { color: string }) {
  return <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '4px 10px', borderRadius: 100,
      background: 'var(--brand-dim)',
      border: '1px solid var(--border-brand)',
      color: 'var(--brand)',
      fontSize: 11, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.07em',
      marginBottom: 12,
    }}>
      {children}
    </div>
  )
}
