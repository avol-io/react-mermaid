
import { SectionLabel } from './DemoSection'

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: 'Zoom & Pan',
    desc: 'Smooth wheel zoom that follows the cursor, keyboard-accessible pan controls, and a 3×3 directional pad.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    ),
    title: 'Fullscreen',
    desc: 'One click to expand the diagram to full viewport. Diagram re-fits automatically to the new size.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: 'Download',
    desc: 'Export as SVG (vector, scalable) or save the raw .mmd source. Each option independently toggleable via props.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/>
        <path d="m8 6 2-2"/><path d="m18 16 2-2"/>
        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/>
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
        <path d="m15 5 4 4"/>
      </svg>
    ),
    title: 'Open in draw.io',
    desc: 'One click opens app.diagrams.net with the diagram preloaded via Mermaid import URL — no copy/paste needed.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
        <path d="M7 7h.01"/>
      </svg>
    ),
    title: 'CSS Tokens',
    desc: 'Every color and size is a CSS custom property. Theme globally via :root or scope to individual instances.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Zero CSS import',
    desc: 'Styles are injected once into <head> on first render and shared across all instances. No bundler config needed.',
  },
]

export function FeaturesSection() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel>Features</SectionLabel>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 48, color: 'var(--text)' }}>
          Everything you need
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 14,
        }}>
          {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      style={{
        padding: '20px 22px',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'border-color 200ms, box-shadow 200ms, transform 200ms',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border-brand)'
        el.style.boxShadow = '0 4px 20px rgba(1,105,111,0.1)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 9,
        background: 'var(--brand-dim)',
        border: '1px solid var(--border-brand)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--brand)', marginBottom: 14,
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}
