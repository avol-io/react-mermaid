import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MermaidDiagram } from '../src'

const INITIAL = `graph LR
  A[Write diagram] --> B[See it live]
  B --> C{Valid?}
  C -- Yes --> D[Done]
  C -- No  --> E[Check errors]
  E --> A`

const meta = {
  title: 'Components/Playground',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta

export const LiveEditor: StoryObj = {
  name: 'Live editor',
  render: () => {
    const [chart, setChart] = useState(INITIAL)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'sans-serif' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <MermaidDiagram chart={chart} width="100%" height="100%" />
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', padding: '12px 16px', background: '#fafafa' }}>
          <label
            htmlFor="mermaid-source"
            style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Mermaid source
          </label>
          <textarea
            id="mermaid-source"
            value={chart}
            onChange={(e) => setChart(e.target.value)}
            rows={7}
            spellCheck={false}
            style={{
              width: '100%',
              fontFamily: 'monospace',
              fontSize: 13,
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              resize: 'vertical',
              boxSizing: 'border-box',
              lineHeight: 1.6,
            }}
          />
        </div>
      </div>
    )
  },
}
