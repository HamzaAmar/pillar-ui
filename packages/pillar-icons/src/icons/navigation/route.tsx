import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const route = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19h4.5a3.5 3.5 0 1 0 0-7h-8a3.5 3.5 0 1 1 0-7H12M8 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default route
