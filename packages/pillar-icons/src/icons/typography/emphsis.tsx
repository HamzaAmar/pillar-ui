import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 10H8M6 20v0m4 0v0m4 0v0m4 0v0M16 5H8v10h8V5Z" />
  </Svg>
)

export default justify
