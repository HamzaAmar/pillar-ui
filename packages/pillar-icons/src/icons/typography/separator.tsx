import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12v0m4 0h10m4 0v0" />
  </svg>
)

export default justify
