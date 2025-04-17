import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const D = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7V4Z" />
  </Svg>
)
