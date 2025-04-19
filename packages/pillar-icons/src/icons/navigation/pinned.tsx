import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pinned = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 4v6l-2 4v2h10v-2l-2-4V4m-3 12v5M8 4h8" />
  </Svg>
)

export default pinned
