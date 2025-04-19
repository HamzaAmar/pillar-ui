import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const dollar = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 1 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3" />
  </Svg>
)

export default dollar
