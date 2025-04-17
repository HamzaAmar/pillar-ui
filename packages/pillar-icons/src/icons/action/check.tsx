import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const check = (props: SvgType) => (
  <Svg {...props}>
    <path d="m5 12 5 5L20 7" />
  </Svg>
)

export default check
