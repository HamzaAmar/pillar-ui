import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const easeInOut = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 20c8 0 10-16 18-16" />
  </Svg>
)

export default easeInOut
