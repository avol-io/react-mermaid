import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const icon = (paths: React.ReactNode) =>
  function Icon({ size = 16, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {paths}
      </svg>
    )
  }

export const ZoomIn = icon(<>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
  <line x1="11" y1="8" x2="11" y2="14" />
  <line x1="8" y1="11" x2="14" y2="11" />
</>)

export const ZoomOut = icon(<>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
  <line x1="8" y1="11" x2="14" y2="11" />
</>)

export const RotateCcw = icon(<>
  <polyline points="1 4 1 10 7 10" />
  <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
</>)

export const Maximize = icon(<>
  <polyline points="15 3 21 3 21 9" />
  <polyline points="9 21 3 21 3 15" />
  <line x1="21" y1="3" x2="14" y2="10" />
  <line x1="3" y1="21" x2="10" y2="14" />
</>)

export const Minimize = icon(<>
  <polyline points="4 14 10 14 10 20" />
  <polyline points="20 10 14 10 14 4" />
  <line x1="10" y1="14" x2="3" y2="21" />
  <line x1="21" y1="3" x2="14" y2="10" />
</>)

export const ArrowUp = icon(
  <polyline points="18 15 12 9 6 15" />
)

export const ArrowDown = icon(
  <polyline points="6 9 12 15 18 9" />
)

export const ArrowLeft = icon(
  <polyline points="15 18 9 12 15 6" />
)

export const ArrowRight = icon(
  <polyline points="9 18 15 12 9 6" />
)

export const Download = icon(<>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
</>)

export const PencilRuler = icon(<>
  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
  <path d="m8 6 2-2" />
  <path d="m18 16 2-2" />
  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</>)

export const ChevronDown = icon(
  <polyline points="6 9 12 15 18 9" />
)