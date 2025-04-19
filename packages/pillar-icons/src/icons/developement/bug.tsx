import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bug = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 9V8a3 3 0 1 1 6 0v1m-3 11a5 5 0 0 0 5-5v-3a6 6 0 0 0-1-3H8c-.6.9-1 2-1 3v3a5 5 0 0 0 5 5Zm0 0v-6m-9-1h4m10 0h4M4 19l3.3-2M20 19l-3.4-2M4 7l3.8 2.4M20 7l-3.8 2.4" />
  </Svg>
)

export default bug
