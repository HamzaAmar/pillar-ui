import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pills = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4.5 4.5 7 7m8 3-5 5M3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8Zm10 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
  </Svg>
)

export default pills
