import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const squareRoot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12h2l4 8 4-16h8" />
  </svg>
)

export default squareRoot
