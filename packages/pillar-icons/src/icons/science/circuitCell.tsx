import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circuitCell = (props: SvgType) => (
  <Svg {...props}>
    <path d="M2 12h8m4 0h8M10 5v14m4-10v6" />
  </Svg>
)

export default circuitCell
