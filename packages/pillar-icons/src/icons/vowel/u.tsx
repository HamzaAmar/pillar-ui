import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const U = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V4" />
  </svg>
)

export default U
