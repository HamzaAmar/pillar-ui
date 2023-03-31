import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const five = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 20h4a4 4 0 1 0 0-8H8V4h8" />
  </svg>
)

export default five
