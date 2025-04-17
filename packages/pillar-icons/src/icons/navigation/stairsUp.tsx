import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const stairsUp = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 20h4v-4h4v-4h4V8h4M4 11l7-7m0 0v4m0-4H7" />
  </Svg>
)

export default stairsUp
