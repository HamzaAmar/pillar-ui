import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const playerPlay = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 4v16l13-8L7 4Z" />
  </Svg>
)

export default playerPlay
