import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const messageForward = (props: SvgType) => (
  <Svg {...props}>
    <path d="m13 9 2 2m0 0-2 2m2-2H9M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4Z" />
  </Svg>
)

export default messageForward
