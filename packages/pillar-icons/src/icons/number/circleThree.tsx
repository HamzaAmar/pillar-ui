import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleThree = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 10a2 2 0 1 1 2 2 2 2 0 1 1-2 2m11-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleThree
