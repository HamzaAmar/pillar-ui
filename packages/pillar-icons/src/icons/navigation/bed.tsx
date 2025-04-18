import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bed = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 7v11m0-4h18m0 4v-8a2 2 0 0 0-2-2h-8v6m-3-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default bed
