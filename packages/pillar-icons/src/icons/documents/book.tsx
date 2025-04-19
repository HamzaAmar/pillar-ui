import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const book = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 19a9 9 0 0 0-9 0V6a9 9 0 0 1 9 0m0 13a9 9 0 0 1 9 0V6a9 9 0 0 0-9 0m0 13V6" />
  </Svg>
)

export default book
