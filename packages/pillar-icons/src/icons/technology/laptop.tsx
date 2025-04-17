import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const laptop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 19h18M6 6h12c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V7c0-.6.4-1 1-1Z" />
  </Svg>
)

export default laptop
