import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 12v7m11-7v7m-11-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </Svg>
)

export default justify
