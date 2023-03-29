import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const iceCream2 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.7 11a6 6 0 1 0-11.4 0m11.4 0L12 22 6.3 11h11.4Z" />
  </svg>
)

export default iceCream2
