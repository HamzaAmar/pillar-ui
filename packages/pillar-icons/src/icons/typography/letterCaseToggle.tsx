import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m-11-1v7m0-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </Svg>
)

export default justify
