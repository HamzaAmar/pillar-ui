import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cartDiscount = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0h11M6 17V3H4m13 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 5l14 1-1 7H6" />
  </svg>
)
export default cartDiscount
