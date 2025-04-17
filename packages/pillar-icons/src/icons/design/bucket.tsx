import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bucket = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 7c0 1 .8 2 2.3 2.8A13 13 0 0 0 12 11a13 13 0 0 0 5.7-1.2C19.2 9.1 20 8.1 20 7M4 7c0-1 .8-2 2.3-2.8A13 13 0 0 1 12 3c2.1 0 4.2.4 5.7 1.2C19.2 4.9 20 5.9 20 7M4 7c0 .7 0 1.3.3 2L7 19c.5 1.5 2.2 2 5 2s4.5-.5 5-2a271.1 271.1 0 0 0 3-12" />
  </Svg>
)

export default bucket
