import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pennant = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 21h4m-2 0V3m0 1 9 4-9 4" />
  </Svg>
)

export default pennant
