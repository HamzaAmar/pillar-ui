import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const close = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
)

export default close
