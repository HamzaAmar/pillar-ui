import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleInfo = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 9h0m-1 3h1v4h1M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default circleInfo
