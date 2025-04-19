import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tablet = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9M7 20h10m-8-4v4m6-4v4m2-12 4-4m-4 0 4 4" />
  </Svg>
)

export default tablet
