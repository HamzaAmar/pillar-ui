import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const heartBroken = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19.5 13.6 12 21m0 0-7.5-7.4A5 5 0 1 1 12 7a5 5 0 1 1 7.5 6.6M12 21v-3l2-4-4-3 2-4" />
  </Svg>
)

export default heartBroken
