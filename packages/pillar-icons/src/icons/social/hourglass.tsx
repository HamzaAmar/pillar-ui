import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const hourglass = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6.5 7h11m-11 10h11M12 12a6 6 0 0 0-6 6v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a6 6 0 0 0-6-6Zm0 0a6 6 0 0 1-6-6V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a6 6 0 0 1-6 6Z" />
  </Svg>
)

export default hourglass
