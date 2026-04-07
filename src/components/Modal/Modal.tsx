import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { injectStyles } from '../../utils/injectStyles'

export interface ModalProps {
  /** Modal heading */
  title?: string
  /** Called when the user dismisses the modal (Escape, overlay click, or close button) */
  onClose: () => void
  children: ReactNode
}

export function Modal({ title = 'Error', onClose, children }: ModalProps) {
  injectStyles()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      ref={overlayRef}
      className="react-modal-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="react-modal-title"
    >
      <div className="react-modal">
        <div className="react-modal-header">
          <h2 className="react-modal-title" id="react-modal-title">{title}</h2>
          <button
            className="react-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &#x2715;
          </button>
        </div>
        <div className="react-modal-body">{children}</div>
      </div>
    </div>
  )
}
