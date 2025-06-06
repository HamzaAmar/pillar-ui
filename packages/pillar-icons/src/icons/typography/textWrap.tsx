import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 6h16M4 18h5m-5-6h13a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2" />
  </Svg>
)

export default justify
