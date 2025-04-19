import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const toggleRight = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 3 18 18M4 7h3m4 0h9m-10 4v6m4-3v3M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1m.4-3.6L19 7M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
  </Svg>
)

export default toggleRight
