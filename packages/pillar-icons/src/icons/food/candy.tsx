import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const candy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14.1 7a2 2 0 0 0-2.8 0L7 11.3v0A2 2 0 0 0 7 14L10 17a2 2 0 0 0 2.8 0l4.3-4.3a2 2 0 0 0 0-2.8L14 7Zm0 0 1.3-2.9a1.5 1.5 0 0 1 2.4-.4L20 5.9a1.5 1.5 0 0 1-.7 2.5l-3 .8m-7.1 7-.8 3.1a1.5 1.5 0 0 1-2.5.7l-2.2-2.2a1.5 1.5 0 0 1 .4-2.4l3-1.3" />
  </svg>
)

export default candy
