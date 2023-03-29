import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const check = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m5 12 5 5L20 7" />
  </svg>
)

export default check
