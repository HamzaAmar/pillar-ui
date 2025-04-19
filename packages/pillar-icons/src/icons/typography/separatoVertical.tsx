import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 12h16M8 8l4-4 4 4m0 8-4 4-4-4" />
  </Svg>
)

export default justify
