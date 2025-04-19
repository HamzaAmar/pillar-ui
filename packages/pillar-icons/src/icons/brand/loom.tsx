import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const loom = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17.5 6.5a6 6 0 1 0-3 8m3 3a6 6 0 1 0-8-3m-3 3a6 6 0 1 0 3-8m-3-3a6 6 0 1 0 8 3" />
  </Svg>
)

export default loom
