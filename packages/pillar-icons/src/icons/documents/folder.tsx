import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const folder = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
  </Svg>
)

export default folder
