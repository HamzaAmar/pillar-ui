import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const squareDot = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15.3 1.6h-12a2 2 0 0 0-2 2v12c0 1 1 2 2 2h12a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Z" />
    <path d="M9.3 10.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
)

export default squareDot
