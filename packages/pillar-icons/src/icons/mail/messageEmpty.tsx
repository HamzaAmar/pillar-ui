import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const MessageEmpty = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 20 1-4C2 13 3 8 6 6c4-3 9-3 12 0 4 3 4 7 1 11-2 3-7 4-11 2l-5 1Z" />
  </Svg>
)

export default MessageEmpty
