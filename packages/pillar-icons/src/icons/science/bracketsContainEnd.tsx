import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bracketsContainEnd = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 4H5v16h3m8-16h3v16h-3" />
  </Svg>
)

export default bracketsContainEnd
