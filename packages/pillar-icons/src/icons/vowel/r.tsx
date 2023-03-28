import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const R = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 20V4h5.5a4.5 4.5 0 1 1 0 9H7m5 0 5 7" />
  </svg>
)

export default R
