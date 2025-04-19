import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bar = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 19v-6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v6c0 .6.4 1 1 1m5-1c0 .6-.4 1-1 1H4m5-1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1m-6 0V9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v10M4 20h14m-3-1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v14Z" />
  </Svg>
)

export default bar
