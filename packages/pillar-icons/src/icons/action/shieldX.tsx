import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const shieldX = (props: SvgType) => (
  <Svg {...props}>
    <path d="m10 10 4 4m0-4-4 4m2-11c2 2 5 3 9 3a12 12 0 0 1-9 15A12 12 0 0 1 4 6c3 0 6-1 8-3Z" />
  </Svg>
)

export default shieldX
