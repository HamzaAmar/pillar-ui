import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const candle = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H16a4.1 4.1 0 1 1-5-5V4a.9.9 0 0 0-1-.8Z" />
    <path d="M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1V3.5Z" />
  </svg>
)

export default candle
