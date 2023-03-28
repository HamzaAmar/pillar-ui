import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 6h-7m7 6h-9m9 6h-7M8 8l-4 4 4 4" />
  </svg>
)

export default justify
