import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleX = (props: SvgType) => (
  <Svg {...props}>
    <path d="m10 10 4 4m0-4-4 4m11-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleX
