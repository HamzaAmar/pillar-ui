import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 12h4M9 4a3 3 0 0 1 3 3m0 0v10m0-10a3 3 0 0 1 3-3m-3 13a3 3 0 0 1-3 3m3-3a3 3 0 0 0 3 3" />
  </Svg>
)

export default justify
