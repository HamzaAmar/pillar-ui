import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tallyMarkOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 5v14m4-14v14m4-14v14m4-14v14M3 17 21 7" />
  </Svg>
)

export default tallyMarkOff
