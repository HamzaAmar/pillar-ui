import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const figma = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0a3 3 0 1 0 0-6H9a3 3 0 0 0 0 6m6 0H9m0 0a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3" />
  </Svg>
)

export default figma
