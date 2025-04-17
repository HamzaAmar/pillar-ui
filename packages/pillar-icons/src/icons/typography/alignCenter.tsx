import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 6h16M8 12h8M6 18h12" />
  </Svg>
)

export default justify
