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
    /**
     * Show the "Download SVG" option in the dropdown.
     * @default true
     */
    enableDownloadSvg?: boolean;
    /**
     * Show the "Download .mmd" option in the dropdown.
     * @default true
     */
    enableDownloadMmd?: boolean;
    /**
     * Show the "Open in draw.io" button in the toolbar.
     * @default true
     */
    enableDrawio?: boolean;
    /** Additional CSS class applied to the wrapper element */
    className?: string;
}
export declare function MermaidDiagram({ chart, width, height, config, enableDownloadSvg, enableDownloadMmd, enableDrawio, className }: MermaidDiagramProps): import("react/jsx-runtime").JSX.Element;
