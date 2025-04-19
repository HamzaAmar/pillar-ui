import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const squareRootX = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 12h1c1 0 1 1 2 3.5s1 3.5 2 3.5h1m-7 0c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 12h1l3 8 3-16h10" />
  </Svg>
)

export default squareRootX
