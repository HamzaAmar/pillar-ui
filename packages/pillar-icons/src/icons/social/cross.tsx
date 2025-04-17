import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cross = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 21h4v-9h5V8h-5V3h-4v5H5v4h5v9Z" />
  </Svg>
)

export default cross
