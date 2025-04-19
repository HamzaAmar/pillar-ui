import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const calendarPlus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 5h9a2 2 0 0 1 2 2v9M16 3v4M8 3v1m-4 7h7m4 0h5m-9 4h1v3M3 3l18 18m-1-1a2 2 0 0 1-2 1H6a2 2 0 0 1-2-2V7a2 2 0 0 1 1-2l15 15Z" />
  </Svg>
)

export default calendarPlus
