import { Logo } from './Logo'

export function Navbar() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 24px',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo />
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#install">Install</NavLink>
          <NavLink href="#styling">Styling</NavLink>
          <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 6px' }} />
          <IconLink
            href="https://www.avol.io/react-mermaid/storybook"
            title="Storybook"
            icon={<StorybookIcon />}
          />
          <IconLink
            href="https://github.com/avol-io/react-mermaid"
            title="GitHub"
            icon={<GithubIcon />}
          />
          <a
            href="https://www.npmjs.com/package/@avol-io/react-mermaid"
            target="_blank" rel="noopener noreferrer"
            title="npm"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 14px',
              borderRadius: 8,
              background: 'var(--brand)',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              transition: 'background 150ms, transform 150ms',
              marginLeft: 4,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand-light)'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--brand)'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}
          >
            npm
          </a>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
    className='nav-links'
      href={href}
      style={{
        padding: '6px 12px',
        borderRadius: 8,
        color: 'var(--text-muted)',
        fontSize: 14,
        fontWeight: 500,
        transition: 'color 150ms, background 150ms',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--text)'
        el.style.background = 'var(--bg-3)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--text-muted)'
        el.style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}

function IconLink({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      title={title}
      aria-label={title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 36, height: 36,
        borderRadius: 8,
        color: 'var(--text-muted)',
        transition: 'color 150ms, background 150ms',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--text)'
        el.style.background = 'var(--bg-3)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--text-muted)'
        el.style.background = 'transparent'
      }}
    >
      {icon}
    </a>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function StorybookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.16l-.1-2.76 1.5-.06a1.5 1.5 0 011.56 1.5v19.5A1.5 1.5 0 0120.54 24l-17.1-.56a1.5 1.5 0 01-1.44-1.51l.59-19.47a1.5 1.5 0 011.5-1.45l12.62-.3zM12.6 9.82c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.86-4.89-3.15 0-4.99 1.72-4.99 4.29 0 4.44 5.99 4.53 5.99 6.96 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.64-.48-3.74 0-.22 3.91 2.16 5.05 5.08 5.05 2.84 0 5.01-1.51 5.01-4.24 0-4.77-6.06-4.64-6.06-6.99 0-.97.72-1.1 1.13-1.1.43 0 1.25.07 1.2 2.06z"/>
    </svg>
  )
}
