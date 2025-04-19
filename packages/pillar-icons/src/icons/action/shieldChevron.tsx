import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const shield = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4 14 8-3 8 3M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c3.1.1 6.2-1 8.5-3Z" />
  </Svg>
)

export default shield
