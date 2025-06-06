import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bread = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 5a3 3 0 0 1 2 5.2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6.8A3 3 0 0 1 6.8 5H17Z" />
  </Svg>
)

export default bread
