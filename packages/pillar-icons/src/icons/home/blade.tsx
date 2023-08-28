import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const blade = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 16 3.2-3.2m1.6-1.6L16 8m-2 0 2 2m-8 4 2 2m7.7-12.3 2.6 2.6a1 1 0 0 1 0 1.4l-.6.6a1 1 0 0 0 0 1.4l.6.6a1 1 0 0 1 0 1.4l-8.6 8.6a1 1 0 0 1-1.4 0l-.6-.6a1 1 0 0 0-1.4 0l-.6.6a1 1 0 0 1-1.4 0l-2.6-2.6a1 1 0 0 1 0-1.4l.6-.6a1 1 0 0 0 0-1.4l-.6-.6a1 1 0 0 1 0-1.4l8.6-8.6a1 1 0 0 1 1.4 0l.6.6a1 1 0 0 0 1.4 0l.6-.6a1 1 0 0 1 1.4 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
)

export default blade
