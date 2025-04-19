import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const axe = (props: SvgType) => (
  <Svg {...props}>
    <path d="m13 9 7.4 7.4a2 2 0 0 1-1.5 3.6c-.6 0-1.1-.2-1.5-.6L10 12m0 0 6-6-3-3-6 6-3.2 1.3a1.3 1.3 0 0 0-.5 2l3.4 3.4a1.3 1.3 0 0 0 2-.5L10 12Z" />
  </Svg>
)

export default axe
