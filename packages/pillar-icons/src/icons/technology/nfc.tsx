import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const speaker = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 20a3 3 0 0 1-3-3V6l5 5m0-7a3 3 0 0 1 3 3v11l-5-5M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" />
  </Svg>
)

export default speaker
