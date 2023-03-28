import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 6h16M4 12h10M4 18h14" />
  </svg>
)

export default justify
