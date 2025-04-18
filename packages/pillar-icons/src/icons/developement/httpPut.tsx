import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const httpPut = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12h2a2 2 0 1 0 0-4H3v8m14-8h4m-2 0v8m-9-8v6a2 2 0 0 0 4 0V8" />
  </Svg>
)

export default httpPut
