import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const J = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4v12a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4" />
  </svg>
)

export default J
