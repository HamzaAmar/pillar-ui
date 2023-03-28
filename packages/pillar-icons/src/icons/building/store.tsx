import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h18M3 7v1a3 3 0 1 0 6 0M3 7h6v1M3 7h18M3 7l2-4h14l2 4M9 8a3 3 0 1 0 6 0M9 8l6-1v1m0 0a3 3 0 0 0 6 0V7M5 21V10.9M19 21V10.9M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
  </svg>
)

export default SvgComponent
