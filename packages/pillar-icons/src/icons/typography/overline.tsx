import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 9v5a5 5 0 1 0 10 0V9M5 5h14" />
  </Svg>
)

export default justify
