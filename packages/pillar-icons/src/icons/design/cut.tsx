import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cut = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9.1 14.8 18 4M6 4l8.8 10.8M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm10 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z0" />
  </svg>
)

export default cut
