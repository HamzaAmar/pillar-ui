import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2Z" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </Svg>
)

export default boxZero
