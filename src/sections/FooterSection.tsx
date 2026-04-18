
export function FooterSection() {
  return (
    <footer style={{
      padding: '32px 24px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-2)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ fontSize: 13, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>
          @avol-io/react-mermaid · MIT License · <a href="https://avol.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>avol.io</a>
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { href: 'https://github.com/avol-io/react-mermaid', label: 'GitHub' },
            { href: 'https://www.npmjs.com/package/@avol-io/react-mermaid', label: 'npm' },
            { href: 'https://www.avol.io/react-mermaid/storybook', label: 'Storybook' },
            { href: 'https://mermaid.js.org', label: 'Mermaid docs' },
          ].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'}
            >{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
