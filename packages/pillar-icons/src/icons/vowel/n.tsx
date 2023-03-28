import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const N = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 20V4l10 16V4" />
  </svg>
)

export default N
