import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const backhoe = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 19a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4h9m-9-4h9m0 4a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 0v-5m-5 2V7h2a3 3 0 0 1 3 3m0 0 5-5 3.12 4.88M5 15v-2a1 1 0 0 1 1-1h7m8.12-2.12a3 3 0 0 1-4.24 4.24l4.24-4.24Z" />
  </Svg>
)

export default backhoe
