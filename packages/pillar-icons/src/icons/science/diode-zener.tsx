import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const diodeZener = (props: SvgType) => (
  <Svg {...props}>
    <path d="M22 12h-6m0 0L8 7v10l8-5ZM2 12h6m6-5h2v10h2" />
  </Svg>
)

export default diodeZener
