import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bracketsContainStart = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 4h4v16h-4m-9-4h0m4 0h0m4 0h0" />
  </Svg>
)

export default bracketsContainStart
