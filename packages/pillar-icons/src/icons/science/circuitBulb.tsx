import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitBulb = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h5m0 0a5 5 0 0 0 10 0M7 12a5 5 0 0 1 10 0m0 0h5M8.5 8.5l7 7m0-7-7 7" />
  </svg>
)

export default circuitBulb
