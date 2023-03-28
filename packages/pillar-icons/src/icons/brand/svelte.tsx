import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m15 8-5 3 .8-.5a4.1 4.1 0 0 1 5.6 1.4 4 4 0 0 1-1.3 5.4l-5 3.1a4 4 0 0 1-6-2.7 4 4 0 0 1 1.8-4l.2-.1M8 17l5-3-.8.5a4.1 4.1 0 0 1-5.6-1.4 4 4 0 0 1 1.3-5.4l5-3.1a4 4 0 0 1 6 2.7 4 4 0 0 1-1.8 4l-.2.1" />
  </svg>
)

export default SvgComponent
