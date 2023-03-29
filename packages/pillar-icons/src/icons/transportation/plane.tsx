import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const plane = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h4L9 3h3l4 7Z" />
  </svg>
)

export default plane
