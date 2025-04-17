import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const T = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 4h12m-6 0v16" />
  </Svg>
)
