import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const train = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 15h16a2 2 0 0 0 2-2c0-3.9-3.4-7-10-7H3v5h17.5M3 10v4m5-3V6m5 5V6.5M3 19h18" />
  </Svg>
)

export default train
