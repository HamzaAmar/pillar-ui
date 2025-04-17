import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleTwo = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 10a2 2 0 1 1 4 0c0 .6-.4 1.3-.8 1.9L10 16h4m7-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleTwo
