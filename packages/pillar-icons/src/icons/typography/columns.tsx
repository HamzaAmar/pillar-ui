import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 6h5.5M4 10h5.5M4 14h5.5M4 18h5.5m5-12H20m-5.5 4H20m-5.5 4H20m-5.5 4H20" />
  </Svg>
)

export default justify
