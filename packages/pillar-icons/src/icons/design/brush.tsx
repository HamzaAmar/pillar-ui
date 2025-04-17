import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const brush = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8.2 13.2A16 16 0 0 1 21 3a16 16 0 0 1-10.2 12.8M10.6 9a9 9 0 0 1 4.4 4.4M3 21v-4a4 4 0 1 1 4 4H3Z" />
  </Svg>
)

export default brush
