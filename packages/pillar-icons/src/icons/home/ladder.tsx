import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ladder = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 3v18m8-18v18m-8-7h8m-8-4h8M8 6h8M8 18h8" />
  </Svg>
)

export default ladder
