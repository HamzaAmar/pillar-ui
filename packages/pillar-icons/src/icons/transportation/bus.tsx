import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h8M4 17H2V6a1 1 0 0 1 1-1h14c1.33 0 2.6.74 3.54 2.05A8.62 8.62 0 0 1 22 12m-2 5a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2v-5m0 0h-4.5L16 5M2 10h15M7 5v5m5-5v5" />
  </Svg>
)

export default bus
