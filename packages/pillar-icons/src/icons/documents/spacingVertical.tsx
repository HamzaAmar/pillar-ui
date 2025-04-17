import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const spacingVertical = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 20v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-4 8H8" />
  </Svg>
)

export default spacingVertical
