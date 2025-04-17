import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const MessageDots = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 11v0m-4 0v0m8 0v0M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4Z" />
  </Svg>
)

export default MessageDots
