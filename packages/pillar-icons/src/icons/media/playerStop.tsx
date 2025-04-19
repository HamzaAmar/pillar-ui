import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const playerStop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 5H7L5 7v10l2 2h10l2-2V7l-2-2Z" />
  </Svg>
)

export default playerStop
