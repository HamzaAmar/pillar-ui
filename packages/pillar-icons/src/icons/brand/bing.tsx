import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bing = (props: SvgType) => (
  <Svg {...props}>
    <path d="m5 3 4 2v12l6-3-2-1-1-4 7 3v4L9 21l-4-2V3Z" />
  </Svg>
)

export default bing
