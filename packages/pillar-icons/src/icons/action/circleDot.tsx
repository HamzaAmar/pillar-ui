import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleCheck = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default circleCheck
