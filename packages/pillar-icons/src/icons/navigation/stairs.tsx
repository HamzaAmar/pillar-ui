import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const stairs = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 18h4v-4h4v-4h4V6h4" />
  </Svg>
)

export default stairs
