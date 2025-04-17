import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const frame = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 7h16M4 17h16M7 4v16M17 4v16" />
  </Svg>
)

export default frame
