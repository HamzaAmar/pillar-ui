import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const httpPost = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12h2a2 2 0 1 0 0-4H3v8m14-1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1m-9-1a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2Z" />
  </Svg>
)

export default httpPost
