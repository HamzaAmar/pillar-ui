import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const playerRecord = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
  </Svg>
)

export default playerRecord
