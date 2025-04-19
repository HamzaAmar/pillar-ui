import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const droneOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 14h4l3.5 3.5M10 14v-4L6.5 6.5M10 14l-3.5 3.5M4 4a3.5 3.5 0 0 0 2 6m8 0 3.5-3.5M18 10a3.5 3.5 0 1 0-4-4m0 12a3.5 3.5 0 0 0 6 2m1-3a3.5 3.5 0 0 0-3-3M6 14a3.5 3.5 0 1 0 4 4M3 3l18 18M10 6a3.5 3.5 0 0 0-3-3l3 3Z" />
  </Svg>
)

export default droneOff
