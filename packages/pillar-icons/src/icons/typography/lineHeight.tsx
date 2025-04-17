import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 8 3-3m0 0 3 3M6 5v14m-3-3 3 3m0 0 3-3m4-10h7m-7 6h7m-7 6h7" />
  </Svg>
)

export default justify
