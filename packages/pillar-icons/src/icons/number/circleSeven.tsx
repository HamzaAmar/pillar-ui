import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 8h4l-2 8m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default boxZero
