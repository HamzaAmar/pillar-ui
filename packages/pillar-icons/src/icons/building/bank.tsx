import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bank = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
  </Svg>
)

export default bank
