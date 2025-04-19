import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tabler = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8 9 3 3-3 3m5 0h3M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z" />
  </Svg>
)

export default tabler
