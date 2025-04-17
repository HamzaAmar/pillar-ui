import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const thermometer = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 17h4l8-8a2.8 2.8 0 1 0-4-4l-8 8v4Zm0 0-3 3M16 7l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5" />
  </Svg>
)

export default thermometer
