import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const eight = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  </Svg>
)

export default eight
