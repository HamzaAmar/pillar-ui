import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const lego = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9.5 12h0m5 0h0m-5 4a3.5 3.5 0 0 0 5 0M7 6h1V4h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" />
  </svg>
)

export default lego
