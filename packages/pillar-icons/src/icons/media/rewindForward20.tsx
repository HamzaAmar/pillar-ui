import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rewindForward10 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 16.5A6 6 0 0 1 9 6h11m0 0-3 3m3-3-3-3M9 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m3-4.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0Z" />
  </svg>
)

export default rewindForward10
