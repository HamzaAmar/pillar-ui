import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const fingerPrint = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18.9 7a8 8 0 0 1 1.1 5v1c0 1 .3 2.1.8 3M8 11a4 4 0 0 1 8 0v1c0 2.2.7 4.3 2 6m-6-7v2c0 2.9.9 5.7 2.5 8M8 15c.2 2.1.9 4.1 1.8 6m-4.9-2a22 22 0 0 1-.9-7v-1a8 8 0 0 1 12-7" />
  </Svg>
)

export default fingerPrint
