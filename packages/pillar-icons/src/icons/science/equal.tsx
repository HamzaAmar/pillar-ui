import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const equal = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 9h14M5 15h14" />
  </svg>
)

export default equal
