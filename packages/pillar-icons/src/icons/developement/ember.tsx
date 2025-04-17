import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ember = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 13c8.5 1.6 11.1-1.2 12.2-2.3 2-2.2 0-6.6-2.7-5.5-2.6 1-6.3 7.7-3.2 12 2.2 3 6 2.2 11.7-2.2" />
  </Svg>
)

export default ember
