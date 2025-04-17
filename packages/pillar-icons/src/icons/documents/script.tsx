import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const receipt = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0 0 6Zm0 0h1a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8" />
  </Svg>
)

export default receipt
