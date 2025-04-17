import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 16h2a2 2 0 0 0 0-4h-2V8h4m7 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default boxZero
