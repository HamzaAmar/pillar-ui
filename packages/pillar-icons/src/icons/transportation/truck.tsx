import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const truck = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h6M5 17H3V6a1 1 0 0 1 1-1h9v12m6 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2v-6m0 0h-8m8 0-3-5h-5" />
  </Svg>
)

export default truck
