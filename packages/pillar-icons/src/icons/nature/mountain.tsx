import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mountain = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7.5 11 2 2.5L12 11l2 3 2.5-2M3 20h18L14 5.4a2.3 2.3 0 0 0-4 0L3 20Z" />
  </Svg>
)
export default mountain
