import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bellOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 3 18 18M9 5h1a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3m-9 3v1a3 3 0 0 0 6 0v-1m2 0H4a4 4 0 0 0 2-3v-3l1-4 10 10Z" />
  </Svg>
)

export default bellOff
