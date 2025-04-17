import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sing = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 9h0m6 0h0M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm10 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </Svg>
)
export default sing
