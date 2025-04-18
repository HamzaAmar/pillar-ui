import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const two = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 8a4 4 0 0 1 8 0c0 1.1-.6 2-1.2 2.8L8 20h8" />
  </Svg>
)

export default two
