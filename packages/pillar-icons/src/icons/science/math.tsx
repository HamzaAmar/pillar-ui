import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const math = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m16 13 4 4m0-4-4 4m4-12h-7L9 19l-3-6H4" />
  </svg>
)

export default math
