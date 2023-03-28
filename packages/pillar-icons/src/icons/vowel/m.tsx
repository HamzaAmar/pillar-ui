import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const M = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 20V4l6 14 6-14v16" />
  </svg>
)

export default M
