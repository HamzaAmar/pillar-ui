import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const BatteryCharging = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 7h1a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2h-2M8 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1m5-9-2 4h3l-2 4" />
  </Svg>
)

export default BatteryCharging
