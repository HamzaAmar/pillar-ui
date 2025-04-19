import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const robot = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 16h4M9 7 8 3m7 4 1-4M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1V9a2 2 0 0 1 2-2Zm2 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </Svg>
)

export default robot
