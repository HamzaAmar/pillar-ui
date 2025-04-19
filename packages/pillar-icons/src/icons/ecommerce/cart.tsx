import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cart = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0h11M6 17V3H4m13 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-11-1 7H6m4-3 6-6m-6 .5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm5 5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" />
  </Svg>
)
export default cart
