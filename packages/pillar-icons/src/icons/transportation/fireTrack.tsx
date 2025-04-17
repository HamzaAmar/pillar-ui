import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const fireTrack = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0v-5h9m-5 6h8m4 0h2v-6m0 0a5 5 0 0 0-5-5h-1m6 5h-4l-2-5m0 0h-3v11M3 9l18-6M6 12V8m13 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default fireTrack
