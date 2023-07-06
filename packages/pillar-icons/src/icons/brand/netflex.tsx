import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const netflex = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 20V4l7 16V4" />
  </svg>
)

export default netflex
