import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const X = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 4 10 16m0-16L7 20" />
  </Svg>
)
