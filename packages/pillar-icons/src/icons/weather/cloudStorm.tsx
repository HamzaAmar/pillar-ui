import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cloudSnow = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 18c-1.2 0-2.4-.5-3.3-1.3-1-.9-1.4-2-1.4-3.2 0-1.2.5-2.3 1.4-3.2C4.6 9.5 5.7 9 7 9a5 5 0 0 1 2.4-3.2 6 6 0 0 1 4.2-.7 6 6 0 0 1 2 .7c.6.4 1.2.9 1.6 1.4.4.6.7 1.2.8 1.8v2h1a3.5 3.5 0 1 1 0 7h-1m-5-4-2 4h3l-2 4" />
  </Svg>
)

export default cloudSnow
