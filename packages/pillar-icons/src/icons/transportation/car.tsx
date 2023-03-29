import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const car = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h6M5 17H3v-6m16 6a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2v-4a2 2 0 0 0-2-2h-1M3 11l2-5h9l4 5M3 11h15m-6 0V6" />
  </svg>
)

export default car
