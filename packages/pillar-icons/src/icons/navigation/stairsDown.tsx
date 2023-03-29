import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stairsDown = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 20h4v-4h4v-4h4V8h4m-9-4-7 7m0 0V7m0 4h4" />
  </svg>
)

export default stairsDown
