import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="m17 15 4 4m0-4-4 4M7 6V5h11v1M7 19h4m2-14L9 19" />
  </Svg>
)

export default justify
