import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M20 6h-7m7 6h-9m9 6h-7M8 8l-4 4 4 4" />
  </Svg>
)

export default justify
