import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 4v16M8 8l-4 4 4 4m8 0 4-4-4-4" />
  </Svg>
)

export default justify
