import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const wreckingBall = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V4l-6 7m-9 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4h9m-9-4h9m0 4a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 0v-5a3 3 0 0 0-3-3H8v5m-3 3v-2a1 1 0 0 1 1-1h7" />
  </Svg>
)

export default wreckingBall
