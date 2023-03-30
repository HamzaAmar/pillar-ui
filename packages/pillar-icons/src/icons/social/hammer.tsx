import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const hammer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11.4 10 4 17.4A2 2 0 0 0 5.5 21c.6 0 1.1-.2 1.5-.6l7.4-7.4m3.7 2.3 2.6-2.6a1 1 0 0 0 0-1.4l-7.6-7.6a1 1 0 0 0-1.4 0L9.1 6.3a1 1 0 0 0 0 1.4l7.6 7.6a1 1 0 0 0 1.4 0Z" />
  </svg>
)

export default hammer
