import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 6h16m-10 6h10M6 18h14" />
  </Svg>
)

export default justify
