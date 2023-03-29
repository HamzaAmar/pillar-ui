import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stairsUp = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 20h4v-4h4v-4h4V8h4M4 11l7-7m0 0v4m0-4H7" />
  </svg>
)

export default stairsUp
