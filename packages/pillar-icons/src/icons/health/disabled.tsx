import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const disabled = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 0v8h4l4 5m-8-9h5m-9 .5a5 5 0 1 0 6 7.5" />
  </Svg>
)

export default disabled
