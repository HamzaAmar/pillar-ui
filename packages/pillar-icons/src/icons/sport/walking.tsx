import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const walk = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 21 3-4m6 4-2-4-3-3 1-6m0 0L8 9l-2 3m6-4 3 3 3 1m-4-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default walk
