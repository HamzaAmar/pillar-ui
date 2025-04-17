import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const sex = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 15a4 4 0 1 1 8 0v1a4 4 0 1 1-8 0V8a4 4 0 0 1 8 0" />
  </Svg>
)

export default sex
