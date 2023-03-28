import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const F = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4H7v16m0-8h8" />
  </svg>
)

export default F
