import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleHelp = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 16v0m0-3a2 2 0 1 0-.4-4 2 2 0 0 0-1.1.7M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default circleHelp
