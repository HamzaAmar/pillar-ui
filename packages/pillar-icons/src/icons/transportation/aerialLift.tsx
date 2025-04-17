import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const aerialLift = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4 5 16-2m-8 1v10m-7 0h14M6.9 8h10.3c2.4 3 2.4 9-.2 12H6.9c-2.6-3-2.6-9 0-12Z" />
  </Svg>
)

export default aerialLift
