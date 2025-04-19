import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const crop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 5v10a1 1 0 0 0 1 1h10M5 8h10a1 1 0 0 1 1 1v10" />
  </Svg>
)

export default crop
