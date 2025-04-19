import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const send = (props: SvgType) => (
  <Svg {...props}>
    <path d="M20 11v3a3 3 0 0 1-3 3H8l-4 4V8a3 3 0 0 1 3-3h7m3-1h4m0 0v4m0-4-5 5" />
  </Svg>
)

export default send
