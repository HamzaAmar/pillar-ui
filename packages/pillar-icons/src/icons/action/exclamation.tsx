import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const exclamationCircle = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19v0m0-4V5" />
  </Svg>
)

export default exclamationCircle
