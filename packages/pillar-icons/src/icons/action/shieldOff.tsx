import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const shieldOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 3 18 18M9 5l3-2c2 2 5 3 9 3a12 12 0 0 1-2 9m-1 3-6 3A12 12 0 0 1 4 6h2l12 12Z" />
  </Svg>
)

export default shieldOff
