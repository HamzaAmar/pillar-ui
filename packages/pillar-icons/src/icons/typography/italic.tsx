import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 5h6M7 19h6m1-14-4 14" />
  </Svg>
)

export default justify
