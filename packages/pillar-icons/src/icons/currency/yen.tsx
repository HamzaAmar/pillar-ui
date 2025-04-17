import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const yen = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19v-7m0 0L7 5m5 7 5-7M8 17h8m-8-4h8" />
  </Svg>
)

export default yen
