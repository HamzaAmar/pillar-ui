import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const planeArrival = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21h18m-5.8-9.2 4.8 1.3a2 2 0 1 1-1 3.9L4.5 13 3 6.6l3 .8 1.3 2.4 3 .8-.2-7.3 2.9.8 2 7.8Z" />
  </Svg>
)

export default planeArrival
