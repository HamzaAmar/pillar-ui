import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tallyMark = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 5v14" />
  </Svg>
)

export default tallyMark
