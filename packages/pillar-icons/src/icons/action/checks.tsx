import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const checks = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
  </svg>
)

export default checks
