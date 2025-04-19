import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tennis = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 5.3a9 9 0 0 1 0 13.4M18 5.3a9 9 0 0 0 0 13.4m3-6.7a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default tennis
