import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const milk = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 6h8M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M8 6 7 7.8c-.7 1-1 2-1 3.1V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a6 6 0 0 0-1-3.2L16 6m-6 4h4m0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default milk
