
import { useState, useEffect, useRef } from 'react'
import { MermaidDiagram } from '@avol-io/react-mermaid'
import { SectionLabel } from './DemoSection'

const TOKENS = [
  { name: '--mermaid-bg',               default: 'transparent',            desc: 'Container background' },
  { name: '--mermaid-border-color',     default: 'rgba(0,0,0,0.12)',       desc: 'Container border color' },
  { name: '--mermaid-border-radius',    default: '8px',                    desc: 'Container corner radius' },
  { name: '--mermaid-toolbar-bg',       default: 'rgba(255,255,255,0.9)',  desc: 'Button background' },
  { name: '--mermaid-toolbar-color',    default: '#374151',                desc: 'Button icon color' },
  { name: '--mermaid-toolbar-hover-bg', default: '#ffffff',                desc: 'Button hover background' },
  { name: '--mermaid-toolbar-focus-ring', default: '#01696f',              desc: 'Focus outline color' },
  { name: '--mermaid-toolbar-btn-size', default: '30px',                   desc: 'Button width & height' },
  { name: '--mermaid-dropdown-bg',      default: '#ffffff',                desc: 'Dropdown panel background' },
  { name: '--mermaid-error-bg',         default: '#fef2f2',                desc: 'Error banner background' },
  { name: '--mermaid-fullscreen-bg',    default: '#ffffff',                desc: 'Fullscreen overlay background' },
]

const DEMO_CHART = `graph LR
  A[Your theme] --> B((React Mermaid))
  B --> C[CSS tokens]
  C --> D{Customized!}`

type Preset = 'light' | 'dark' | 'purple'

const PRESETS: Record<Preset, Record<string, string>> = {
  light: {},
  dark: {
    '--mermaid-bg': '#1f2937',
    '--mermaid-border-color': '#374151',
    '--mermaid-toolbar-bg': 'rgba(17,24,39,0.9)',
    '--mermaid-toolbar-color': '#f9fafb',
    '--mermaid-toolbar-hover-bg': '#111827',
    '--mermaid-toolbar-border': '#4b5563',
    '--mermaid-fullscreen-bg': '#111827',
    '--mermaid-dropdown-bg': '#1f2937',
    '--mermaid-dropdown-item-color': '#f3f4f6',
    '--mermaid-dropdown-item-hover': '#374151',
  },
  purple: {
    '--mermaid-bg': '#fdf4ff',
    '--mermaid-border-color': '#d8b4fe',
    '--mermaid-border-radius': '16px',
    '--mermaid-toolbar-bg': 'rgba(233,213,255,0.95)',
    '--mermaid-toolbar-color': '#6b21a8',
    '--mermaid-toolbar-hover-bg': '#f3e8ff',
    '--mermaid-toolbar-border': '#c084fc',
    '--mermaid-toolbar-focus-ring': '#9333ea',
    '--mermaid-dropdown-bg': '#fdf4ff',
    '--mermaid-dropdown-item-color': '#6b21a8',
    '--mermaid-dropdown-item-hover': '#f3e8ff',
  },
}

const CSS_PREVIEW: Record<Preset, string> = {
  light: '/* default — no overrides needed */',
  dark: Object.entries(PRESETS.dark).map(([k, v]) => `  ${k}: ${v};`).join('\n').replace(/^/, ':root {\n').concat('\n}'),
  purple: Object.entries(PRESETS.purple).map(([k, v]) => `  ${k}: ${v};`).join('\n').replace(/^/, ':root {\n').concat('\n}'),
}

// Force re-render of MermaidDiagram when preset changes
function DiagramPreview({ preset }: { preset: Preset }) {
  const [key, setKey] = useState(0)
  const prevPreset = useRef(preset)

  useEffect(() => {
    if (prevPreset.current !== preset) {
      prevPreset.current = preset
      setKey(k => k + 1)
    }
  }, [preset])

  return (
    <div style={PRESETS[preset]}>
      <MermaidDiagram
        key={key}
        chart={DEMO_CHART}
        width="100%"
        height="260px"
        config={{ theme: preset === 'dark' ? 'dark' : 'default' }}
      />
    </div>
  )
}

export function StylingSection() {
  const [preset, setPreset] = useState<Preset>('light')

  return (
    <section id="styling" style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel>Theming</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700,
          letterSpacing: '-0.03em', marginBottom: 8, color: 'var(--text)',
        }}>
          CSS custom properties
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 36, maxWidth: 520, fontSize: 15 }}>
          All colors and sizes are CSS tokens on <code style={{ fontFamily: 'var(--mono)', color: 'var(--brand)', fontSize: 13 }}>:root</code>.
          Override globally or scope to a wrapper class for per-instance theming.
        </p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {(['light', 'dark', 'purple'] as Preset[]).map(p => (
            <button key={p} onClick={() => setPreset(p)} style={{
              padding: '7px 18px', borderRadius: 8, cursor: 'pointer',
              border: '1px solid',
              borderColor: preset === p ? 'var(--brand)' : 'var(--border)',
              background: preset === p ? 'var(--brand-dim)' : 'var(--bg)',
              color: preset === p ? 'var(--brand)' : 'var(--text-muted)',
              fontSize: 13, fontWeight: 500, transition: 'all 120ms',
              fontFamily: 'var(--font)',
              boxShadow: preset === p ? 'none' : 'var(--shadow-sm)',
            }}>
              {p === 'purple' ? '💜 Purple' : p === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20, alignItems: 'start',
        }}>
          <DiagramPreview preset={preset} />

          <div style={{
            borderRadius: 'var(--radius)', border: '1px solid var(--border)',
            background: '#0d1117', overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{
              padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
              fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--mono)',
            }}>css</div>
            <pre style={{
              margin: 0, padding: '16px 18px',
              fontSize: 12, lineHeight: 1.7, color: '#c9d1d9',
              fontFamily: 'var(--mono)', overflowX: 'auto',
            }}>
              <code>{CSS_PREVIEW[preset]}</code>
            </pre>
          </div>
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 600, marginTop: 52, marginBottom: 16, color: 'var(--text)' }}>
          All available tokens
        </h3>
        <div style={{
          borderRadius: 'var(--radius)', border: '1px solid var(--border)',
          overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
                {['Token', 'Default', 'Controls'].map(h => (
                  <th key={h} style={{
                    textAlign: 'left', padding: '10px 14px',
                    color: 'var(--text-muted)', fontWeight: 600, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TOKENS.map((t, i) => (
                <tr key={t.name} style={{
                  borderBottom: '1px solid var(--border)',
                  background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-2)',
                }}>
                  <td style={{ padding: '10px 14px' }}>
                    <code style={{ color: 'var(--brand)', fontFamily: 'var(--mono)', fontSize: 12 }}>{t.name}</code>
                  </td>
                  <td style={{ padding: '10px 14px' }}>
                    <code style={{ color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>{t.default}</code>
                  </td>
                  <td style={{ padding: '10px 14px', color: 'var(--text-muted)' }}>{t.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
