import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const M = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 20V4l6 14 6-14v16" />
  </Svg>
)
