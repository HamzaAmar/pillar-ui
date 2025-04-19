import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const minimize = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 9h4m0 0V5m0 4L3 3m2 12h4m0 0v4m0-4-6 6M19 9h-4m0 0V5m0 4 6-6m-2 12h-4m0 0v4m0-4 6 6" />
  </Svg>
)

export default minimize
