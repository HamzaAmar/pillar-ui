import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const minus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 12h14" />
  </svg>
)

export default minus
