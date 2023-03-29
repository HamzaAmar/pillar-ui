import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const steeringWheel = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0v-7m2-2a2 2 0 0 1-2 2m2-2a2 2 0 1 0-4 0m4 0 6.8-2M12 14a2 2 0 0 1-2-2m0 0-6.8-2" />
  </svg>
)

export default steeringWheel
