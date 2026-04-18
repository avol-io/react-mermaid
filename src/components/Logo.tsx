import { useEffect, useRef } from 'react'

export function Logo() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const nodes = svg.querySelectorAll<SVGCircleElement>('circle[data-node]')
    const edges = svg.querySelectorAll<SVGLineElement>('line[data-edge]')
    let t = 0
    let raf: number

    const tick = () => {
      t += 0.02
      nodes.forEach((node, i) => {
        const base = parseFloat(node.getAttribute('data-r') ?? '4')
        const pulse = base + Math.sin(t + i * 1.3) * 1.2
        node.setAttribute('r', String(pulse.toFixed(2)))
      })
      edges.forEach((edge, i) => {
        const opacity = 0.45 + Math.sin(t * 0.8 + i * 0.9) * 0.35
        edge.style.opacity = String(Math.max(0.1, opacity))
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        ref={svgRef}
        width="36" height="36" viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="9" fill="#01696f" />
        <line data-edge x1="8" y1="8"  x2="28" y2="8"  stroke="white" strokeWidth="1.5" />
        <line data-edge x1="8" y1="8"  x2="8"  y2="28" stroke="white" strokeWidth="1.5" />
        <line data-edge x1="8" y1="28" x2="28" y2="28" stroke="white" strokeWidth="1.5" />
        <line data-edge x1="28" y1="8" x2="28" y2="28" stroke="white" strokeWidth="1.5" />
        <line data-edge x1="8" y1="8"  x2="18" y2="18" stroke="white" strokeWidth="1.5" />
        <line data-edge x1="18" y1="18" x2="28" y2="28" stroke="white" strokeWidth="1.5" />
        <circle data-node data-r="3.5" cx="8"  cy="8"  r="3.5" fill="white" />
        <circle data-node data-r="3.5" cx="28" cy="8"  r="3.5" fill="white" />
        <circle data-node data-r="3.5" cx="8"  cy="28" r="3.5" fill="white" />
        <circle data-node data-r="3.5" cx="28" cy="28" r="3.5" fill="white" />
        <circle data-node data-r="4"   cx="18" cy="18" r="4"   fill="white" />
      </svg>
      <span style={{
        fontWeight: 800,
        fontSize: 18,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
        lineHeight: 1,
      }}>
        react<span style={{ color: 'var(--brand-light)' }}>-mermaid</span>
      </span>
    </div>
  )
}
