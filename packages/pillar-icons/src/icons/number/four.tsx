import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const four = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 20V5L7 16h10" />
  </Svg>
)

export default four
