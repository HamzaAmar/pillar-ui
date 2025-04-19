import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const squareRoot = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12h2l4 8 4-16h8" />
  </Svg>
)

export default squareRoot
