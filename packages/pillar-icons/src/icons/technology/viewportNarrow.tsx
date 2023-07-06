import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tablet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12h7m0 0L7 9m3 3-3 3m14-3h-7m0 0 3-3m-3 3 3 3M9 6V3h6v3M9 18v3h6v-3" />
  </svg>
)

export default tablet
