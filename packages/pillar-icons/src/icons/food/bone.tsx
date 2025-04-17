import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const bone = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 3a3 3 0 0 1 3 3 3 3 0 1 1-2.1 5.1L11 16a3 3 0 1 1-5 2.3L6 18h-.2a3 3 0 1 1 2.3-5.1L13 8A3 3 0 0 1 15 3Z" />
  </Svg>
)

export default bone
