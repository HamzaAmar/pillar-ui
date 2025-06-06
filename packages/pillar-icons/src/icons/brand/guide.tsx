import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const guide = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 3v4l-3.9 6H18v4h-6.4L9 21H6v-4l3.9-6H6V7h6.4L15 3h3Z" />
  </Svg>
)

export default guide
