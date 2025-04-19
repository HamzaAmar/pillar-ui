import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const diode = (props: SvgType) => (
  <Svg {...props}>
    <path d="M22 12h-6m0 0L8 7v10l8-5ZM2 12h6m8-5v10" />
  </Svg>
)

export default diode
