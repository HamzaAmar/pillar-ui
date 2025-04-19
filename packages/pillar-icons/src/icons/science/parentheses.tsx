import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const parentheses = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 4a12.3 12.3 0 0 0 0 16M17 4a12.3 12.3 0 0 1 0 16" />
  </Svg>
)

export default parentheses
