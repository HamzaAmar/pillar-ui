import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const kotlin = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 20h16l-8-8m-8 8V4h16L4 20Zm0-8 8-8" />
  </Svg>
)

export default kotlin
