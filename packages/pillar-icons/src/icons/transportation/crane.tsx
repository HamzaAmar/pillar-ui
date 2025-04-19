import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const crane = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 21h6m-3 0V3m0 0L3 9h18M9 3l10 6m-2 0v4a2 2 0 1 1-2 2" />
  </Svg>
)

export default crane
