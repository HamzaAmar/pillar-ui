import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sum = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 16v2a1 1 0 0 1-1 1H6l6-7-6-7h11a1 1 0 0 1 1 1v2" />
  </Svg>
)

export default sum
