import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bootstrap = (props: SvgType) => (
  <Svg {...props}>
    <path d="M2 12a2 2 0 0 0 2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2" />
    <path d="M9 16V8h3.5a2 2 0 0 1 0 4H9h4a2 2 0 0 1 0 4H9Z" />
  </Svg>
)

export default bootstrap
