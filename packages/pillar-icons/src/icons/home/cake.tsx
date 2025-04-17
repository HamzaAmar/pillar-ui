import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cake = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 14.8 1 .2a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1c.4 0 .7 0 1-.2M3 20h18v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8Zm9-16 1.5 1.6a2 2 0 1 1-3 .1L12 4Z" />
  </Svg>
)

export default cake
