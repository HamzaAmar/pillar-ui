import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const lamp = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 20h6m-3 0v-8m-7 0h14l-4-8H9l-4 8Z" />
  </Svg>
)

export default lamp
