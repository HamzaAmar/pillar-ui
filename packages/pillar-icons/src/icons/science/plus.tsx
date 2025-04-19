import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const plus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 5v14m-7-7h14" />
  </Svg>
)

export default plus
