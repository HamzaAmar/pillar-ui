import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const glassFull = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 21h8m-4-6v6m0-6c3.3 0 6-2 6-5m-6 5c-3.3 0-6-2-6-5m12 0-1-7H7l-1 7m12 0a5 5 0 0 1-6 0 5 5 0 0 0-6 0" />
  </Svg>
)

export default glassFull
