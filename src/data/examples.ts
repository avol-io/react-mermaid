export interface Example {
  label: string
  chart: string
}

export const EXAMPLES: Example[] = [
  {
    label: 'Flowchart',
    chart: `graph TD
  A([Start]) --> B{Is it working?}
  B -- Yes --> C[🎉 Ship it]
  B -- No  --> D[Debug]
  D --> E[Coffee break ☕]
  E --> B`,
  },
  {
    label: 'Sequence diagram',
    chart: `sequenceDiagram
  autonumber
  actor User
  participant App
  participant API
  participant DB

  User->>App: Submit form
  App->>API: POST /data
  API->>DB: INSERT row
  DB-->>API: OK
  API-->>App: 201 Created
  App-->>User: ✅ Saved`,
  },
  {
    label: 'Class diagram',
    chart: `classDiagram
  class MermaidDiagram {
    +string chart
    +string width
    +string height
    +MermaidConfig config
    +boolean enableDownloadSvg
    +boolean enableDownloadMmd
    +boolean enableDrawio
  }
  class TransformWrapper {
    +zoomIn()
    +zoomOut()
    +setTransform()
  }
  MermaidDiagram --> TransformWrapper : uses`,
  },
  {
    label: 'Git graph',
    chart: `gitGraph
  commit id: "init"
  branch feature/zoom
  checkout feature/zoom
  commit id: "add pan"
  commit id: "add zoom"
  checkout main
  merge feature/zoom id: "merge zoom"
  branch feature/download
  checkout feature/download
  commit id: "svg export"
  commit id: "mmd export"
  checkout main
  merge feature/download id: "v0.3.0"`,
  },
]
