import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 9v5a5 5 0 1 0 10 0V9M5 5h14" />
  </svg>
)

export default justify
