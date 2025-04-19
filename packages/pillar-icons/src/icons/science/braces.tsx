import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const braces = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19 20 8.6 9a3 3 0 1 1 4.2 0L8 13.7a3.7 3.7 0 0 0 5.2 5.2L19 13" />
  </Svg>
)

export default braces
