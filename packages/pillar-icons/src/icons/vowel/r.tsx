import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const R = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 20V4h5.5a4.5 4.5 0 1 1 0 9H7m5 0 5 7" />
  </Svg>
)
