import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const codePen = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 15 9 6m-9-6 9-6m-9 6V9m9 12 9-6m-9 6v-6m9 0-9-6m9 6V9m-9 0V3M3 9l9 6M3 9l9-6m0 12 9-6m0 0-9-6" />
  </Svg>
)

export default codePen
