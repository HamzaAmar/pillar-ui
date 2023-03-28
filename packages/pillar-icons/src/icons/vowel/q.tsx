import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Q = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13 15 5 5m0-11a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V9Z" />
  </svg>
)

export default Q
