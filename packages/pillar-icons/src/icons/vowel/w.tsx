import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const W = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4 4 4 16 4-14 4 14 4-16" />
  </Svg>
)
