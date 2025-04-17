import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const resistor = (props: SvgType) => (
  <Svg {...props}>
    <path d="M2 12h2l2-5 3 10 3-10 3 10 3-10 2 5h2" />
  </Svg>
)

export default resistor
