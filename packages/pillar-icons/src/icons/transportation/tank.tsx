import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tank = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 15 15 4m5 5L9 20m-4-8 7 7M8.5 8.5l7 7M12 5l7 7" />
  </svg>
)

export default tank
