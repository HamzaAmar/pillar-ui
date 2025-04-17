import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const frame = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 19H3l9-15m8.6 11.2h0m-1-3.4h0m-1.9-3.1h0M15.4 6h0" />
  </Svg>
)

export default frame
