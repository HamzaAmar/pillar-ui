import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const chartLine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4" />
  </Svg>
)

export default chartLine
