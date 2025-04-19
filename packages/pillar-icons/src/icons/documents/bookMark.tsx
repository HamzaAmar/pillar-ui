import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bookMark = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3-5 3V6a2 2 0 0 1 2-2Z" />
  </Svg>
)

export default bookMark
