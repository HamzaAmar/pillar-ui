import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const percentage = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 18 18 6m0 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default percentage
