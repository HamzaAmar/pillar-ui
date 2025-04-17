import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const umbrella = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12v6a2 2 0 0 0 4 0M4 12a8 8 0 1 1 16 0H4Z" />
  </Svg>
)

export default umbrella
