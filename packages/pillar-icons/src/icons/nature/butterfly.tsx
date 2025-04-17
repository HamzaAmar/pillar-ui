import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const butterfly = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19V9M9 3l3 2 3-2m-3 15.2a3 3 0 1 1-5-2.5h0a4.5 4.5 0 1 1 5-7 4.5 4.5 0 1 1 5 7 3 3 0 1 1-5 2.3v.2Z" />
  </Svg>
)
export default butterfly
