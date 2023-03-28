import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const L = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 4v16h10" />
  </svg>
)

export default L
