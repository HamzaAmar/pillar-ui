import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const E = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4H7v16h10M7 12h8" />
  </svg>
)

export default E
