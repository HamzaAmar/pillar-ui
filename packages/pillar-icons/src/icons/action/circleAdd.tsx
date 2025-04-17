import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleAdd = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 12h6m-3-3v6m9-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleAdd
