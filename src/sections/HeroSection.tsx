
import { HeroTitle } from '../components/HeroTitle'

export function HeroSection() {
  return (
    <section style={{
      padding: 'clamp(60px,10vw,120px) 24px clamp(40px,8vw,80px)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(1,105,111,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(1,105,111,0.11) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 75%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <HeroTitle />

        <p style={{
          fontSize: 'clamp(1rem,2.5vw,1.15rem)',
          color: 'var(--text-muted)', maxWidth: 540,
          margin: '0 auto 36px', lineHeight: 1.75,
        }}>
          React component for rendering Mermaid diagrams with zoom, pan,
          fullscreen, download and draw.io integration.{' '}
          <span style={{ color: 'var(--text-dim)' }}>
            No CSS import needed. Fully themeable via CSS tokens.
          </span>
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          <a href="#demo" style={{
            padding: '12px 28px', borderRadius: 10,
            background: 'var(--brand)', color: '#fff',
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(1,105,111,0.28)',
            transition: 'background 150ms, transform 150ms, box-shadow 150ms',
            display: 'inline-block',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='var(--brand-light)'; el.style.transform='translateY(-1px)'; el.style.boxShadow='0 6px 20px rgba(1,105,111,0.38)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='var(--brand)'; el.style.transform='translateY(0)'; el.style.boxShadow='0 4px 14px rgba(1,105,111,0.28)' }}
          >
            Try it live →
          </a>
          <a href="#install" style={{
            padding: '12px 28px', borderRadius: 10,
            border: '1px solid var(--border)', background: 'var(--bg)',
            color: 'var(--text)', fontWeight: 600, fontSize: 15,
            textDecoration: 'none', boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 150ms, transform 150ms, box-shadow 150ms',
            display: 'inline-block',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--brand)'; el.style.transform='translateY(-1px)'; el.style.boxShadow='var(--shadow-md)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--border)'; el.style.transform='translateY(0)'; el.style.boxShadow='var(--shadow-sm)' }}
          >
            Get started
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          <Badge label="npm"     value="@avol-io/react-mermaid" color="#cc3534" />
          <Badge label="react"   value="≥19"                    color="#087ea4" />
          <Badge label="mermaid" value="≥11"                    color="#d97706" />
          <Badge label="license" value="MIT"                    color="#16a34a" />
        </div>
      </div>
    </section>
  )
}

function Badge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{
      display: 'inline-flex', borderRadius: 6, overflow: 'hidden',
      fontSize: 11, fontFamily: 'var(--mono)',
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}>
      <span style={{ padding: '3px 8px', background: '#555d6b', color: '#fff' }}>{label}</span>
      <span style={{ padding: '3px 8px', background: color, color: '#fff', fontWeight: 600 }}>{value}</span>
    </div>
  )
}
