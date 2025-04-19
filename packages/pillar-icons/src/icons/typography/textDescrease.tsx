import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m10-1h-6" />
  </Svg>
)

export default justify
