import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const E = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 4H7v16h10M7 12h8" />
  </Svg>
)
