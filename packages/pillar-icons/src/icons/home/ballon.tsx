import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ballon = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 8a2 2 0 0 0-2-2m0 11c3.3 0 6-4 6-9A6 6 0 1 0 6 8c0 5 2.7 9 6 9Zm0 0v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2" />
  </Svg>
)

export default ballon
