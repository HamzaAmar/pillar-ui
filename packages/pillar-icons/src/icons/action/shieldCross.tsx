import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const shield = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21m0-18a12 12 0 0 1-8.5 3A12 12 0 0 0 12 21m0-18v18m-8.5-9h17" />
  </Svg>
)

export default shield
