import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const shirt = (props: SvgType) => (
  <Svg {...props}>
    <path d="m15 4 6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 1 0 6 0Z" />
  </Svg>
)

export default shirt
