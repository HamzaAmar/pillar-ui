import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 12h16M8 8l4-4 4 4m0 8-4 4-4-4" />
  </svg>
)

export default justify
