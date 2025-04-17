import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const easeOut = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 20S13 4 21 4" />
  </Svg>
)

export default easeOut
