import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const H = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 4v16M7 12h10M7 4v16" />
  </Svg>
)
