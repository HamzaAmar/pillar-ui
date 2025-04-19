import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mist = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 5h3m4 0h9M3 10h11m4 0h1M5 15h5m4 0h7M3 20h9m4 0h3" />
  </Svg>
)

export default mist
