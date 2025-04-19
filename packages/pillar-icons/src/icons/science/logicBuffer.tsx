import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const logicBuffer = (props: SvgType) => (
  <Svg {...props}>
    <path d="M22 12h-5m0 0L7 5v14l10-7ZM2 9h5m-5 6h5" />
  </Svg>
)

export default logicBuffer
