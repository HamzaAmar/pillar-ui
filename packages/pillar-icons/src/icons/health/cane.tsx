import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bandage = (props: SvgType) => (
  <Svg {...props}>
    <path d="m9 21 6.3-11.7c.6-1 1.8-4-1.5-5.8-3.2-1.6-5.2 1-5.8 2" />
  </Svg>
)

export default bandage
