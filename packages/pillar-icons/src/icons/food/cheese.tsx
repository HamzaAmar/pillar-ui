import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cheese = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 9v3.5a2 2 0 0 0 0 4V20H4.5c-1-1.6-1.5-3.6-1.5-5.7 0-2.6.9-5 2.3-6.9C6.9 5.4 9 4.1 11.6 4L21 9Zm0 0H4.3M15 13v0m-7 0v0m3 3v0" />
  </Svg>
)

export default cheese
