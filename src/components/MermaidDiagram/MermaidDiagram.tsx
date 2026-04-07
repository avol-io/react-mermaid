import { useEffect, useRef, useState, useId, useCallback } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import mermaid from 'mermaid'
import { injectStyles } from '../../utils/injectStyles'
import { Modal } from '../Modal/Modal'
import type { MermaidConfig } from 'mermaid'

export interface MermaidDiagramProps {
  /** Mermaid diagram source text */
  chart: string
  /** CSS width of the container (default: "100%") */
  width?: string
  /** CSS height of the container (default: "400px") */
  height?: string
  /** Options forwarded to mermaid.initialize() */
  config?: MermaidConfig
}

export function MermaidDiagram({
  chart,
  width = '100%',
  height = '400px',
  config,
}: MermaidDiagramProps) {
  injectStyles()

  const rawId = useId()
  const id = rawId.replace(/:/g, '')
  const [svg, setSvg] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const configRef = useRef(config)
  configRef.current = config

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, ...configRef.current })
  }, [])

  const render = useCallback(async () => {
    try {
      setError(null)
      document.getElementById(`mermaid-${id}`)?.remove()
      const { svg: rendered } = await mermaid.render(`mermaid-${id}`, chart)
      setSvg(rendered)
    } catch (err) {
      setSvg('')
      document.getElementById(`mermaid-${id}`)?.remove()
      setError(err instanceof Error ? err.message : String(err))
    }
  }, [chart, id])

  useEffect(() => { void render() }, [render])

  return (
    <div
      className={['react-mermaid-wrapper', fullscreen && 'react-mermaid-fullscreen'].filter(Boolean).join(' ')}
      style={{ width, height }}
      role="img"
      aria-label="Mermaid diagram"
    >
      {error ? (
        <>
          <div
            className="react-mermaid-error"
            role="alert"
            onClick={() => setErrorModalOpen(true)}
            title="Click to see full error"
          >
            &#9888; Mermaid parse error &#8212; click to expand
          </div>
          {errorModalOpen && (
            <Modal title="Mermaid Error" onClose={() => setErrorModalOpen(false)}>
              <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontSize: 13, fontFamily: 'monospace' }}>
                {error}
              </pre>
            </Modal>
          )}
        </>
      ) : (
        <TransformWrapper minScale={0.1} maxScale={10} centerOnInit>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* top-right: fullscreen toggle */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--top">
                <button
                  onClick={() => setFullscreen((f) => !f)}
                  title={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                  aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  {fullscreen ? '⛶' : '⛶'}
                </button>
              </div>

              {/* bottom-right: zoom + reset */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--bottom">
                <button onClick={() => zoomIn()} title="Zoom in" aria-label="Zoom in">+</button>
                <button onClick={() => zoomOut()} title="Zoom out" aria-label="Zoom out">&#x2212;</button>
                <button onClick={() => resetTransform()} title="Reset view" aria-label="Reset view">&#x21BA;</button>
              </div>

              <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      )}
    </div>
  )
}
