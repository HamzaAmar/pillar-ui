import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const surprised = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 10h0m6 0h0m-5 4v2a2 2 0 0 0 4 0v-2m1.5 0h-7M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)
export default surprised
