import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const gamepad = (props: SvgType) => (
  <Svg {...props}>
    <path d="m14 15 4 4.3a2.3 2.3 0 0 0 4-2L20.4 9M8 9v2m-1-1h2m5 0h2m-.5-5a5 5 0 1 1 0 10H10l-4 4.2a2.3 2.3 0 0 1-4-2L3.8 9a5 5 0 0 1 4.9-4h6.9Z" />
  </Svg>
)

export default gamepad
