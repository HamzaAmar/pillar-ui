import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tie = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13.5 7 16 18l-4 4-4-4 2.5-11m3 0 1-2.6a1 1 0 0 0-1-1.4h-3a1 1 0 0 0-1 1.4l1 2.6m3 0h-3m3 0 5 5.5" />
  </Svg>
)

export default tie
