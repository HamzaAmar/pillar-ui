import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const S = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 8a4 4 0 0 0-4-4h-2a4 4 0 0 0 0 8h2a4 4 0 1 1 0 8h-2a4 4 0 0 1-4-4" />
  </Svg>
)
