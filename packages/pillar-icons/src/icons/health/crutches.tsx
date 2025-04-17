import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const crutches = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 7a2 2 0 0 0 0-4h-4a2 2 0 1 0 0 4m4 0h-4m4 0v5a3 3 0 0 1-.5 1.8l-1 1.4A3 3 0 0 0 12 17M10 7v5c0 .7.2 1.3.5 1.8l1 1.4c.3.5.5 1.1.5 1.7M11 21h2m-1 0v-4m-2-6h4" />
  </Svg>
)

export default crutches
