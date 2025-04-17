import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const edit = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1M16 5l3 3m1.4-1.4a2.1 2.1 0 0 0-3-3L9 12v3h3l8.4-8.4Z" />
  </Svg>
)

export default edit
