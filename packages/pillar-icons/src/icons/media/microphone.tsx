import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const microphone = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 10a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7m-7 7v4m-4 0h8M12 2c2 0 3 1 3 3v5a3 3 0 1 1-6 0V5c0-2 1-3 3-3Z" />
  </Svg>
)

export default microphone
