import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18.5 18.5 21 21M4 6h16M4 12h4m-4 6h4m11-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </Svg>
)

export default justify
