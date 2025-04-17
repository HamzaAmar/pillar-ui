import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const Y = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 4 5 9m0 0 5-9m-5 9v7" />
  </Svg>
)
