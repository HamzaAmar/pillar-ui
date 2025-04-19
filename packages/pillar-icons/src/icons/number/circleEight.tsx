import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default boxZero
