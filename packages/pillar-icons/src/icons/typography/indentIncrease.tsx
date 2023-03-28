import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 6H9m11 6h-7m7 6H9M4 8l4 4-4 4" />
  </svg>
)

export default justify
