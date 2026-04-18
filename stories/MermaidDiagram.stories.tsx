import type { Meta, StoryObj } from '@storybook/react'
import { MermaidDiagram } from '../src'

const meta = {
  title: 'Components/MermaidDiagram',
  component: MermaidDiagram,
  tags: ['autodocs'],
  args: {
    width: '640px',
    height: '380px',
    enableDownloadSvg: true,
    enableDownloadMmd: true,
    enableDrawio: true,
  },
} satisfies Meta<typeof MermaidDiagram>

export default meta
type Story = StoryObj<typeof meta>

export const Flowchart: Story = {
  args: {
    chart: `graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]`,
  },
}

export const SequenceDiagram: Story = {
  args: {
    chart: `sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice-)John: See you later!`,
  },
}

export const ClassDiagram: Story = {
  args: {
    chart: `classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal : +int age
  Animal : +String gender
  Animal: +mate()
  class Duck{
    +String beakColor
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }`,
  },
}

export const ParseError: Story = {
  name: 'Parse Error (modal)',
  args: {
    chart: 'this is not valid mermaid !!!',
    height: '160px',
  },
}

export const NoToolbar: Story = {
  name: 'Download & draw.io disabled',
  args: {
    chart: `graph LR
  A[Input] --> B[Process] --> C[Output]`,
    enableDownloadSvg: false,
    enableDownloadMmd: false,
    enableDrawio: false,
  },
}

export const OnlySvgDownload: Story = {
  name: 'SVG download only',
  args: {
    chart: `graph LR
  A[Input] --> B[Process] --> C[Output]`,
    enableDownloadMmd: false,
    enableDrawio: false,
  },
}