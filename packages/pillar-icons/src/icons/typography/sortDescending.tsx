import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 6h9m-9 6h7m-7 6h7m4-3 3 3m0 0 3-3m-3 3V6" />
  </svg>
)

export default justify
