import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M10 9h4m-2-2v4" />
  </Svg>
)

export default SvgComponent
