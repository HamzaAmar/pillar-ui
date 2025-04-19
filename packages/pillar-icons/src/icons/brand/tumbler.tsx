import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tumbler = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 21h4v-4h-4v-6h4V7h-4V3h-4v1a3 3 0 0 1-3 3H6v4h4v6a4 4 0 0 0 4 4Z" />
  </Svg>
)

export default tumbler
