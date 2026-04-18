
import { useEffect, useRef, useState } from 'react'

export function HeroTitle() {
  const [phase, setPhase] = useState<'idle' | 'stroke' | 'fill'>('idle')
  const hasPlayed = useRef(false)

  useEffect(() => {
    // Auto-play once on mount
    const t1 = setTimeout(() => setPhase('stroke'), 300)
    const t2 = setTimeout(() => setPhase('fill'), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const replay = () => {
    if (hasPlayed.current) {
      setPhase('idle')
      setTimeout(() => setPhase('stroke'), 50)
      setTimeout(() => setPhase('fill'), 1500)
    }
    hasPlayed.current = true
  }

  useEffect(() => {
    if (phase === 'fill') hasPlayed.current = true
  }, [phase])

  const isStroke = phase === 'stroke' || phase === 'fill'
  const isFill   = phase === 'fill'

  return (
    <div
      onClick={replay}
      title="Click to replay"
      style={{ position: 'relative', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}
    >
      {/* Screen reader text */}
      <span style={{
        position: 'absolute', width: 1, height: 1,
        overflow: 'hidden', clip: 'rect(0,0,0,0)',
      }}>React Mermaid</span>

      <svg
        aria-hidden="true"
        viewBox="0 0 740 110"
        style={{ width: '100%', maxWidth: 740, height: 'auto', display: 'block', margin: '0 auto', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#01696f" />
            <stop offset="55%"  stopColor="#02b3bc" />
            <stop offset="100%" stopColor="#7ee8ed" />
          </linearGradient>

          {/* Clip mask that reveals fill left→right */}
          <clipPath id="fillReveal">
            <rect
              x="0" y="0" height="120"
              width={isFill ? 740 : 0}
              style={{
                transition: isFill
                  ? 'width 1.2s cubic-bezier(0.4,0,0.2,1)'
                  : 'none',
              }}
            />
          </clipPath>
        </defs>

        {/* ── Layer 1: always-visible light grey base (so text is readable before animation) */}
        <text
          x="12" y="90"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="96" fontWeight="800" letterSpacing="-4"
          fill="#e2e8f0"
        >
          React Mermaid
        </text>

        {/* ── Layer 2: stroke outline — draws in */}
        <text
          x="12" y="90"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="96" fontWeight="800" letterSpacing="-4"
          fill="none"
          stroke="#01696f"
          strokeWidth="1.5"
          paintOrder="stroke fill"
          style={{
            strokeDasharray: '8000 8000',
            strokeDashoffset: isStroke ? 0 : 8000,
            transition: isStroke
              ? 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)'
              : 'none',
          }}
        >
          React Mermaid
        </text>

        {/* ── Layer 3: gradient fill — revealed left→right after stroke */}
        <g clipPath="url(#fillReveal)">
          <text
            x="12" y="90"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="96" fontWeight="800" letterSpacing="-4"
            fill="url(#titleGrad)"
          >
            React Mermaid
          </text>
        </g>

        {/* underline accent */}
        <line
          x1="12" y1="100" x2="728" y2="100"
          stroke="#01696f" strokeWidth="1.5"
          style={{
            strokeDasharray: '716 716',
            strokeDashoffset: isFill ? 0 : 716,
            opacity: 0.2,
            transition: isFill ? 'stroke-dashoffset 1s ease 0.5s' : 'none',
          }}
        />
      </svg>

      {/* replay hint — fades in after animation */}
     

      {/* package badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '4px 14px', borderRadius: 100,
        background: 'rgba(1,105,111,0.08)',
        border: '1px solid rgba(1,105,111,0.22)',
        fontSize: 13, fontFamily: 'var(--mono)',
        color: '#01696f',
        marginTop: 10, marginBottom: 20,
        letterSpacing: '-0.01em',
      }}>
        @avol-io/react-mermaid
      </div>
    </div>
  )
}
