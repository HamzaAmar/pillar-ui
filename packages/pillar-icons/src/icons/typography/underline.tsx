import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 5v5a5 5 0 1 0 10 0V5M5 19h14" />
  </svg>
)

export default justify
