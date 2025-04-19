import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cloudSnow = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4 4 7 7M9 4l3.5 3.5M4 9l3.5 3.5m8 6-3 1.5.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5-3-1.5Z" />
  </Svg>
)

export default cloudSnow
