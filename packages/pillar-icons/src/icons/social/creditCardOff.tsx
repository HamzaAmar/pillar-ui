import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const creditCardOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M9 5h9a3 3 0 0 1 3 3v8l-.1.9m-2 2a3 3 0 0 1-.9.1H6a3 3 0 0 1-3-3V8a3 3 0 0 1 2.1-2.9M3 11h8m4 0h6M7 15h0m4 0h2" />
  </svg>
)

export default creditCardOff
