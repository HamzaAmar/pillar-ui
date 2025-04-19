import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const squareHelp = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 16v0m0-3a2 2 0 1 0-.4-4 2 2 0 0 0-1.1.7M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" />
  </Svg>
)

export default squareHelp
