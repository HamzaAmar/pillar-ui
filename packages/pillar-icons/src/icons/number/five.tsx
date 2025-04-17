import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const five = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 20h4a4 4 0 1 0 0-8H8V4h8" />
  </Svg>
)

export default five
