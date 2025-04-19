import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const toyota = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19c5.5 0 10-3.1 10-7s-4.5-7-10-7m0 14c-5.5 0-10-3.1-10-7s4.5-7 10-7m0 14c-1.7 0-3-3.1-3-7s1.3-7 3-7m0 14c1.7 0 3-3.1 3-7s-1.3-7-3-7M6.4 6.2C5.5 6.7 5 7.3 5 8c0 1.7 3.1 3 7 3s7-1.3 7-3c0-.7-.5-1.3-1.4-1.8" />
  </Svg>
)

export default toyota
