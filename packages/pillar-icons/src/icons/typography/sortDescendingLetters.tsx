import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 21v-5c0-1.4.6-2 2-2s2 .6 2 2v5m0-3h-4m4-8h-4l4-7h-4M4 15l3 3m0 0 3-3m-3 3V6" />
  </Svg>
)

export default justify
