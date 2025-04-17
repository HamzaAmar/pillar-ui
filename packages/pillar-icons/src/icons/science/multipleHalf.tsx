import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const multipleHalf = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21 21 3m-1 9a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </Svg>
)

export default multipleHalf
