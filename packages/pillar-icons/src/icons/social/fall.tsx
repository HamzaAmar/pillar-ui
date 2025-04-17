import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const fall = (props: SvgType) => (
  <Svg {...props}>
    <path d="m11 22 1-5-1-4-3-4m0 0h4l3-3M8 9l-3 4 1 4m7.5-4H16l4 2M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default fall
