import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const confused = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 10h0m6 0h0m-5.5 6a10 10 0 0 1 6-1.5M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)
export default confused
