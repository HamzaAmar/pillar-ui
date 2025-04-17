import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const squareInfo = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 9h0m-1 3h1v4h1M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" />
  </Svg>
)

export default squareInfo
