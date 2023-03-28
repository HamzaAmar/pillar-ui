import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ripple = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 5H7h3a4 4 0 1 1 0 8H7l6 6M7 9h11" />
  </svg>
)

export default ripple
