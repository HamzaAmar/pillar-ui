import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const divide = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 12h14m-6-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default divide
