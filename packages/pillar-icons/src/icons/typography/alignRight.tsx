import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 6h16m-10 6h10M6 18h14" />
  </svg>
)

export default justify
