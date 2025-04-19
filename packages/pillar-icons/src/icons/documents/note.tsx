import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const note = (props: SvgType) => (
  <Svg {...props}>
    <path d="m13 20 7-7m-7 7v-6a1 1 0 0 1 1-1h6m-7 7H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
  </Svg>
)

export default note
