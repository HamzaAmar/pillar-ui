import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 6h16M8 12h8M6 18h12" />
  </svg>
)

export default justify
