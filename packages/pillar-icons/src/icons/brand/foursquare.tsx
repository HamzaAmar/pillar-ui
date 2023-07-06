import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const fourSquare = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 9h5M7 3h10c.6 0 1.1.7 1 1.3l-2 9.9a1 1 0 0 1-1 .8h-2.3a1 1 0 0 0-.7.4l-4.2 5.2A1 1 0 0 1 6 20V4c0-.6.4-1 1-1Z" />
  </svg>
)

export default fourSquare
