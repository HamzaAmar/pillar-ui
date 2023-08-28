import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const armChair = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4m-3 5v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2m0-3h8m-9 7v2m10-2v2" />
  </svg>
)

export default armChair
