import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const checks = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
  </Svg>
)

export default checks
