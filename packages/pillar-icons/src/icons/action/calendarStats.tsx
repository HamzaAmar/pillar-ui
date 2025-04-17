import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const calendarStats = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H3m15 3v4h4m-4-4a4 4 0 1 0 4 4m-4-4c2 0 4 2 4 4M15 3v4M7 3v4" />
  </Svg>
)

export default calendarStats
