import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const run = (props: SvgType) => (
  <Svg {...props}>
    <path d="m4 17 5 1 .8-1.5M15 21v-4l-4-3 1-6m0 0L7 9v3m5-4 3 3 3 1m-4-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default run
