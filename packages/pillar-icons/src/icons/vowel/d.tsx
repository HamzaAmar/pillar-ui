import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const D = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7V4Z" />
  </svg>
)

export default D
