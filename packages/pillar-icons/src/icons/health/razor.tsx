import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const razor = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 7v4m0 0a2 2 0 0 1 2 2v6a2 2 0 0 1-4 0v-6a2 2 0 0 1 2-2ZM7 3h10v4H7V3Z" />
  </Svg>
)

export default razor
