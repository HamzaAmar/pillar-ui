import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tablet = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 3H6a1 1 0 0 0-1 1v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1Z" />
    <path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
)

export default tablet
