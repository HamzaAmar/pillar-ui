import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const flipFlop = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14.5 14c1-3.3 2.2-5 3.5-5 1.3 0 2.5 1.7 3.5 5M18 16v1M2.5 14c1-3.3 2.2-5 3.5-5 1.3 0 2.5 1.7 3.5 5M6 16v1M18 4c2.2 0 4 1.7 4 3.8V8l-.6 9c-.1 1.7-1.6 3-3.4 3a3.3 3.3 0 0 1-3.4-3L14 8C14 6 15.5 4 17.8 4h.2ZM6 4c2.2 0 4 1.7 4 3.8V8l-.6 9c-.1 1.7-1.6 3-3.4 3a3.3 3.3 0 0 1-3.4-3L2 8C2 6 3.5 4 5.8 4H6Z" />
  </svg>
)

export default flipFlop
