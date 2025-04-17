import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleNine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v4a2 2 0 0 1-4 0m11-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleNine
