import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 12h14m-3-5.5c-.2-.4-.7-.8-1.5-1.1A7 7 0 0 0 12 5h-1a3.5 3.5 0 1 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a7 7 0 0 1-2.5-.4c-.8-.3-1.3-.7-1.5-1.1" />
  </Svg>
)

export default justify
