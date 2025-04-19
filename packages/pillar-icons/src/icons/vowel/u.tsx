import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const U = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V4" />
  </Svg>
)
