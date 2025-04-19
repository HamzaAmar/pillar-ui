import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const gasStation = (props: SvgType) => (
  <Svg {...props}>
    <path d="M20 9v7a2 2 0 1 1-3 0v-3a2 2 0 0 0-2-2H4m16-2-3-3m3 3h-1a1 1 0 0 1-1-1V7M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14M3 20h12" />
  </Svg>
)

export default gasStation
