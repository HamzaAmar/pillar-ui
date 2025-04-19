import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const clover = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 10 8.6 6.6a2.1 2.1 0 0 1 .7-3.4 2 2 0 0 1 2.2.4l.5.4.5-.4a2 2 0 0 1 2.9 0 2.1 2.1 0 0 1 0 3L12 10ZM12 14l-3.4 3.4a2.1 2.1 0 0 0 .7 3.4 2 2 0 0 0 2.2-.4l.5-.4.5.4a2 2 0 0 0 2.9 0 2.1 2.1 0 0 0 0-3L12 14ZM14 12l3.4-3.4a2.1 2.1 0 0 1 3.4.7 2 2 0 0 1-.4 2.2l-.4.5.4.5a2 2 0 0 1 0 2.9 2.1 2.1 0 0 1-3 0L14 12ZM10 12 6.6 8.6a2.1 2.1 0 0 0-3.4.7 2 2 0 0 0 .4 2.2l.4.5-.4.5a2 2 0 0 0 0 2.9 2.1 2.1 0 0 0 3 0L10 12Z" />
  </Svg>
)
export default clover
