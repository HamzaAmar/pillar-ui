import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const volumeMute = (props: SvgType) => (
  <Svg {...props}>
    <path d="m16 10 4 4m0-4-4 4M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4-5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1l-4-5Z" />
  </Svg>
)

export default volumeMute
