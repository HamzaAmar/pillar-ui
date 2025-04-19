import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const trowel = (props: SvgType) => (
  <Svg {...props}>
    <path d="m10 10 6.5 6.5m-2-7.4L9 14.4a2 2 0 0 1-3.3-.8L3 5.6a2 2 0 0 1 2.5-2.5l8 2.7a2 2 0 0 1 .8 3.3Zm4.8 7.5 1.1 1a2 2 0 0 1-2.7 2.8l-1.1-1a2 2 0 1 1 2.7-2.8Z" />
  </Svg>
)

export default trowel
