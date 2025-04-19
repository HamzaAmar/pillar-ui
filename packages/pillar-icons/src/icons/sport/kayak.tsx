import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const kayak = (props: SvgType) => (
  <Svg {...props}>
    <path d="m6.5 6.5 11 11m-11-5 5 5m1-11 5 5m-11-5a2 2 0 0 0 0-3L5 2.3 2.2 5l1.4 1.4a2 2 0 0 0 2.8 0Zm11 11a2 2 0 0 0 0 3l1.5 1.3 2.8-2.8-1.4-1.4a2 2 0 0 0-2.8 0Zm4.5-15C12 5.1 4.4 10.5 2 22c10-2.6 17.6-8 20-19.5Z" />
  </Svg>
)

export default kayak
