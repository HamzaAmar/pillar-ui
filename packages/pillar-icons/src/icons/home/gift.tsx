import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const gift = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 8v13m0-13c-.4-1.5-1-2.8-1.8-3.7A3.6 3.6 0 0 0 7.5 3a2.5 2.5 0 1 0 0 5M12 8c.4-1.5 1-2.8 1.8-3.7.8-.8 1.7-1.3 2.7-1.3a2.5 2.5 0 0 1 0 5m2.5 4v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z" />
  </Svg>
)

export default gift
