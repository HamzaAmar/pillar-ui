import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sleigh = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 19h15a4 4 0 0 0 4-4M7 15h9a3 3 0 0 0 3-3v-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 0 1-2-2V8H8.5a6 6 0 0 1-4.3-1.8L3 5v6a4 4 0 0 0 4 4Zm0 0v4m8-4v4" />
  </Svg>
)

export default sleigh
