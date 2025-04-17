import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pin = (props: SvgType) => (
  <Svg {...props}>
    <path d="m15 4.5-4 4L7 10l-1.5 1.5 7 7L14 17l1.5-4 4-4M9 15l-4.5 4.5M14.5 4 20 9.5" />
  </Svg>
)

export default pin
