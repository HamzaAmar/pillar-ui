import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const equalNot = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 9h14M5 15h14m0-10L5 19" />
  </Svg>
)

export default equalNot
