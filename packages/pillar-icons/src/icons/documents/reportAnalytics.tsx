import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const reportAnalytics = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 4v18m4-14h2m-2 4h2M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
  </Svg>
)

export default reportAnalytics
