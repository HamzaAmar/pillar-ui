import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const calendar = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 17v0m0-3.5a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0-3-4m-7 4a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </Svg>
)

export default calendar
