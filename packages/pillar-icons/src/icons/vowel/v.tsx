import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const V = (props: SvgType) => (
  <Svg {...props}>
    <path d="m6 4 6 16 6-16" />
  </Svg>
)
