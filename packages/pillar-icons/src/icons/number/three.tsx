import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const three = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 8a4 4 0 1 1 4 4 4 4 0 1 1-4 4" />
  </Svg>
)

export default three
