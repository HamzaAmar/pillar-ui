import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const heartMonitor = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 9.5h6l1-2 2 4 1-2h6m-16 5h16m-6 3v0m3 0v0M6 4.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default heartMonitor
