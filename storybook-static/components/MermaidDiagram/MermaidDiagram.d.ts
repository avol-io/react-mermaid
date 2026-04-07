import { MermaidConfig } from 'mermaid';
export interface MermaidDiagramProps {
    /** Mermaid diagram source text */
    chart: string;
    /** CSS width of the container (default: "100%") */
    width?: string;
    /** CSS height of the container (default: "400px") */
    height?: string;
    /** Options forwarded to mermaid.initialize() */
    config?: MermaidConfig;
}
export declare function MermaidDiagram({ chart, width, height, config, }: MermaidDiagramProps): import("react/jsx-runtime").JSX.Element;
