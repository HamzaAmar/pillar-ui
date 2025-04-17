import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const nine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 9a4 4 0 1 1-8 0V8a4 4 0 0 1 8 0v8a4 4 0 1 1-8 0" />
  </Svg>
)

export default nine
