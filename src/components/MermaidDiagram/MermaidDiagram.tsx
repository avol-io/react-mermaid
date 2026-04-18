import { useEffect, useRef, useState, useId, useCallback } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import mermaid from 'mermaid'
import {
  ZoomIn, ZoomOut, RotateCcw,
  Maximize, Minimize,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  Download, ChevronDown,
  PencilRuler,
} from '../../utils/icons';
import { injectStyles } from '../../utils/injectStyles'
import { Modal } from '../Modal/Modal'
import type { MermaidConfig } from 'mermaid'

const PAN_STEP = 80

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
  /**
   * Show the "Download SVG" option in the dropdown.
   * @default true
   */
  enableDownloadSvg?: boolean
  /**
   * Show the "Download .mmd" option in the dropdown.
   * @default true
   */
  enableDownloadMmd?: boolean
  /**
   * Show the "Open in draw.io" button in the toolbar.
   * @default true
   */
  enableDrawio?: boolean
}

export function MermaidDiagram({
  chart,
  width = '100%',
  height = '400px',
  config,
  enableDownloadSvg = true,
  enableDownloadMmd = true,
  enableDrawio = true,
}: MermaidDiagramProps) {
  injectStyles()

  const rawId = useId()
  const id = rawId.replace(/:/g, '')
  const [svg, setSvg] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const downloadRef = useRef<HTMLDivElement>(null)

  const configRef = useRef(config)
  configRef.current = config

  const wrapperRef = useRef<HTMLDivElement>(null)
  const { controlsRef, contentRef, fitToScreen } = useFitToScreen(wrapperRef)

  // Derived: whether the download dropdown has any items to show
  const hasDownloadOptions = enableDownloadSvg || enableDownloadMmd

  // Close download dropdown on outside click
  useEffect(() => {
    if (!downloadOpen) return
    const handler = (e: MouseEvent) => {
      if (downloadRef.current && !downloadRef.current.contains(e.target as Node)) {
        setDownloadOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [downloadOpen])

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

  const pan = useCallback((dx: number, dy: number) => {
    const controls = controlsRef.current
    if (!controls) return
    const { positionX, positionY, scale } = controls.instance.transformState
    controls.setTransform(positionX + dx, positionY + dy, scale, 100)
  }, [controlsRef])

  const downloadSvg = useCallback(() => {
    if (!svg) return
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'diagram.svg'
    a.click()
    URL.revokeObjectURL(url)
    setDownloadOpen(false)
  }, [svg])

  const downloadMmd = useCallback(() => {
    const blob = new Blob([chart], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'diagram.mmd'
    a.click()
    URL.revokeObjectURL(url)
    setDownloadOpen(false)
  }, [chart])

  const openInDrawio = useCallback(() => {
    const payload = JSON.stringify({ type: 'mermaid', data: chart })
    const url = `https://app.diagrams.net/#create=${encodeURIComponent(payload)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [chart])

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
          centerZoomedOut={false}
          wheel={{ step: 0.1 }}
        >
          {({ zoomIn, zoomOut }) => (
            <>
              {/* top-right toolbar */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--top">

                {/* Download dropdown — rendered only if at least one option is enabled */}
                {hasDownloadOptions && (
                  <div className="react-mermaid-dropdown" ref={downloadRef}>
                    <button
                      onClick={() => setDownloadOpen((v) => !v)}
                      title="Download"
                      aria-label="Download"
                      aria-expanded={downloadOpen}
                    >
                      <Download size={16} />
                      <ChevronDown size={10} className="react-mermaid-chevron" />
                    </button>
                    {downloadOpen && (
                      <div className="react-mermaid-dropdown-menu" role="menu">
                        {enableDownloadSvg && (
                          <button role="menuitem" onClick={downloadSvg}>SVG</button>
                        )}
                        {enableDownloadMmd && (
                          <button role="menuitem" onClick={downloadMmd}>.mmd</button>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Open in draw.io — rendered only if enabled */}
                {enableDrawio && (
                  <button
                    onClick={openInDrawio}
                    title="Open in draw.io"
                    aria-label="Open in draw.io"
                  >
                    <PencilRuler  size={16} />
                  </button>
                )}

                {/* Fullscreen toggle — always visible */}
                <button
                  onClick={() => setFullscreen((f) => !f)}
                  title={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                  aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  {fullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                </button>
              </div>

              {/* bottom-right: 3x3 grid */}
              <div className="react-mermaid-toolbar react-mermaid-toolbar--bottom">
                <div className="react-mermaid-grid">
                  {/* row 1 */}
                  <span />
                  <button onClick={() => pan(0, PAN_STEP)}  title="Pan up"    aria-label="Pan up"><ArrowUp size={14} /></button>
                  <button onClick={() => zoomIn()}           title="Zoom in"   aria-label="Zoom in"><ZoomIn size={14} /></button>
                  {/* row 2 */}
                  <button onClick={() => pan(PAN_STEP, 0)}  title="Pan left"  aria-label="Pan left"><ArrowLeft size={14} /></button>
                  <button onClick={() => fitToScreen(200)}  title="Reset view" aria-label="Reset view"><RotateCcw size={14} /></button>
                  <button onClick={() => pan(-PAN_STEP, 0)} title="Pan right" aria-label="Pan right"><ArrowRight size={14} /></button>
                  {/* row 3 */}
                  <span />
                  <button onClick={() => pan(0, -PAN_STEP)} title="Pan down"  aria-label="Pan down"><ArrowDown size={14} /></button>
                  <button onClick={() => zoomOut()}          title="Zoom out"  aria-label="Zoom out"><ZoomOut size={14} /></button>
                </div>
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