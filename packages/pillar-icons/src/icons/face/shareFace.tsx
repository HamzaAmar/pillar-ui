import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const shareFace = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 13a9 9 0 1 0-9 8M9 10h0m6 0h0m-5.5 5c.7.7 1.6 1 2.5 1h.6m3.4 6 5-5m0 0v4.5m0-4.5h-4.5" />
  </Svg>
)
export default shareFace
