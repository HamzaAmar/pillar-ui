import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ripple = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 19V5h6a3 3 0 0 1 0 6H6m8 4H6" />
  </Svg>
)

export default ripple
