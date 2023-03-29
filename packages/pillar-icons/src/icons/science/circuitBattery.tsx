import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitBattery = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h4m12 0h4m-4-7v14M14 9v6M10 5v14M6 9v6" />
  </svg>
)

export default circuitBattery
