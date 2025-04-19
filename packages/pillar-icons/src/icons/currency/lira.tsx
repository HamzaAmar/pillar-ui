import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const lira = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4m0-4-8 4" />
  </Svg>
)

export default lira
