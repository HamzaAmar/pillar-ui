import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ripple = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 5H7h3a4 4 0 1 1 0 8H7l6 6M7 9h11" />
  </Svg>
)

export default ripple
