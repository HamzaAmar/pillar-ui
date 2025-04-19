import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 6h16M4 12h10M4 18h14" />
  </Svg>
)

export default justify
