import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pagekit = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 20H7V4h11v14h-5" />
  </Svg>
)

export default pagekit
