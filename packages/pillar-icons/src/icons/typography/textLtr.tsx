import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 19h14m0 0-2 2m2-2-2-2M16 4H9.5a3.5 3.5 0 1 0 0 7h.5m4 4V4m-4 11V4" />
  </Svg>
)

export default justify
