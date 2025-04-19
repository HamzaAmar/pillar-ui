import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const equal = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 9h14M5 15h14" />
  </Svg>
)

export default equal
