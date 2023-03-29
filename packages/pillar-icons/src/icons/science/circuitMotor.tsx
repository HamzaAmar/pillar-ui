import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitMotor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 12a7 7 0 1 1-14 0m14 0a7 7 0 1 0-14 0m14 0h3M5 12H2m8 2v-4l2 2 2-2v4" />
  </svg>
)

export default circuitMotor
