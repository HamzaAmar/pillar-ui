import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bellX = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 17v1a3 3 0 0 0 6 0v-1m-4-7 3 3m0-3-3 3m-1-8a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6Z" />
  </Svg>
)

export default bellX
