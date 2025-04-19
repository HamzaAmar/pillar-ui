import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ripple = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 18V6h4a4 4 0 0 1 4 4v4m4-8v12h-4a4 4 0 0 1-4-4v-4" />
  </Svg>
)

export default ripple
