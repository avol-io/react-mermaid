import { useEffect, useRef } from 'react'
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import { syntaxHighlighting, defaultHighlightStyle, bracketMatching } from '@codemirror/language'

interface Props {
  value: string
  onChange: (v: string) => void
}

const customTheme = EditorView.theme({
  '&': {
    fontSize: '13px',
    height: '100%',
    background: 'transparent',
  },
  '.cm-scroller': {
    fontFamily: 'var(--mono)',
    overflow: 'auto',
    height: '100%',
  },
  '.cm-content': { padding: '12px 0' },
  '.cm-gutters': {
    background: 'rgba(0,0,0,0.2)',
    border: 'none',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    color: '#4a5568',
  },
  '.cm-lineNumbers .cm-gutterElement': { padding: '0 12px 0 8px', minWidth: '32px' },
  '.cm-activeLine': { background: 'rgba(255,255,255,0.03)' },
  '.cm-selectionBackground': { background: 'rgba(1,105,111,0.25) !important' },
  '&.cm-focused .cm-cursor': { borderLeftColor: '#01696f' },
  '.cm-focused .cm-selectionBackground': { background: 'rgba(1,105,111,0.3)' },
})

export function CodeMirrorEditor({ value, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    if (!containerRef.current) return

    const view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          history(),
          lineNumbers(),
          highlightActiveLine(),
          bracketMatching(),
          syntaxHighlighting(defaultHighlightStyle),
          markdown(),
          oneDark,
          customTheme,
          keymap.of([...defaultKeymap, ...historyKeymap]),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChangeRef.current(update.state.doc.toString())
            }
          }),
          EditorView.lineWrapping,
        ],
      }),
      parent: containerRef.current,
    })

    viewRef.current = view
    return () => view.destroy()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync external value changes (e.g. example select)
  useEffect(() => {
    const view = viewRef.current
    if (!view) return
    const current = view.state.doc.toString()
    if (current === value) return
    view.dispatch({
      changes: { from: 0, to: current.length, insert: value },
    })
  }, [value])

  return (
    <div
      ref={containerRef}
      style={{ height: '100%', overflow: 'hidden' }}
    />
  )
}
