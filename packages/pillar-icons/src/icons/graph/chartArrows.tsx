import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const chartArrows = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 18h14m0 0-3-3m3 3-3 3M9 9l3 3m0 0-3 3m3-3H3m0-9v18M18 3l3 3m0 0-3 3m3-3H3" />
  </Svg>
)

export default chartArrows
