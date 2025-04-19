import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 15v-3.5a2.5 2.5 0 0 1 5 0V15m0-2h-5M3 9l3 6 3-6m0 11 6-16" />
  </Svg>
)

export default justify
