// MermaidDiagram.tsx
import { useEffect, useRef, useState, useId, useCallback } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import mermaid from 'mermaid'
import { injectStyles } from '../../utils/injectStyles'
import { Modal } from '../Modal/Modal'
import type { MermaidConfig } from 'mermaid'

function useFitToScreen(wrapperRef: React.RefObject<HTMLDivElement | null>) {
  const controlsRef = useRef<ReactZoomPanPinchRef>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const fitToScreen = useCallback((animate = 200) => {
  const wrapper = wrapperRef.current
  const controls = controlsRef.current
  const svgEl = contentRef.current?.querySelector('svg')
  if (!wrapper || !controls || !svgEl) return

  const viewBox = svgEl.getAttribute('viewBox')?.split(' ').map(Number)
  if (viewBox && viewBox.length >= 4) {
    svgEl.setAttribute('width',  String(viewBox[2]))
    svgEl.setAttribute('height', String(viewBox[3]))
  }
  svgEl.style.maxWidth = 'none'

  const box = svgEl.getBBox()
  if (!box.width || !box.height) return

  const { width, height } = wrapper.getBoundingClientRect()
  const padding = 24
  const scale = Math.min(
    (width  - padding * 2) / box.width,
    (height - padding * 2) / box.height,
  )
  const nextScale = Number.isFinite(scale) && scale > 0 ? scale : 1
  const x = (width  - box.width  * nextScale) / 2 - box.x * nextScale
  const y = (height - box.height * nextScale) / 2 - box.y * nextScale

  controls.setTransform(x, y, nextScale, animate)
}, [wrapperRef])

  return { controlsRef, contentRef, fitToScreen }
}

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

  const wrapperRef = useRef<HTMLDivElement>(null)
  const { controlsRef, contentRef, fitToScreen } = useFitToScreen(wrapperRef)

  // Inizializza mermaid una volta sola
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, ...configRef.current })
  }, [])

  // Render del chart
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


  useEffect(() => {
    if (!svg) return
    const raf = requestAnimationFrame(() => fitToScreen(0))
    return () => cancelAnimationFrame(raf)
  }, [svg, fitToScreen])


  useEffect(() => {
    const raf = requestAnimationFrame(() => fitToScreen(200))
    return () => cancelAnimationFrame(raf)
  }, [fullscreen, fitToScreen])


  useEffect(() => {
    const el = wrapperRef.current
    if (!el || !svg) return
    const ro = new ResizeObserver(() => fitToScreen(0))
    ro.observe(el)
    return () => ro.disconnect()
  }, [svg, fitToScreen])

  return (
    <div
      ref={wrapperRef}
      className={[
        'react-mermaid-wrapper',
        fullscreen && 'react-mermaid-fullscreen',
      ].filter(Boolean).join(' ')}
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
        <TransformWrapper
          onInit={(ref) => { (controlsRef as React.RefObject<ReactZoomPanPinchRef>).current = ref }}
          minScale={0.1}
          maxScale={10}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* top-right: fullscreen toggle */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--top">
                <button
                  onClick={() => setFullscreen((f) => !f)}
                  title={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                  aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  ⛶
                </button>
              </div>

              {/* bottom-right: zoom + reset */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--bottom">
                <button onClick={() => zoomIn()}         title="Zoom in"    aria-label="Zoom in">+</button>
                <button onClick={() => zoomOut()}        title="Zoom out"   aria-label="Zoom out">&#x2212;</button>
                <button onClick={() => resetTransform()} title="Reset view" aria-label="Reset view">&#x21BA;</button>
              </div>

              <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                <div ref={contentRef} dangerouslySetInnerHTML={{ __html: svg }} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      )}
    </div>
  )
}
