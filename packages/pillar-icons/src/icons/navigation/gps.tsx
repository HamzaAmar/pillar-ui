import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const gps = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="m12 17-1-4-4-1 9-4-4 9Z" />
  </Svg>
)

export default gps
