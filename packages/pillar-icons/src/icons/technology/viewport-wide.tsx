import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tablet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 12H3m0 0 3-3m-3 3 3 3m8-3h7m0 0-3-3m3 3-3 3M3 6V3h18v3M3 18v3h18v-3" />
  </svg>
)

export default tablet
