import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const toggleLeft = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12Z" />
  </Svg>
)

export default toggleLeft
