import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const chartDot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 3v18h18M10.2 10.6l2.3 2.9m2.6-.2 2.8-4.6M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default chartDot
