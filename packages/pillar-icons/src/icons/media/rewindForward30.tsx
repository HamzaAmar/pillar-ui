import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rewindForward10 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 16.5A6 6 0 0 1 9 6h11m0 0-3 3m3-3-3-3M9 14h1.5a1.5 1.5 0 1 1 0 3m0 0H10m.5 0a1.5 1.5 0 1 1 0 3H9m6-4.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0Z" />
  </svg>
)

export default rewindForward10
