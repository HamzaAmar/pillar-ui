import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 7v0m0 3v0m0 3v0m10-6v0m0 3v0m0 3v0m-9 8a1 1 0 0 0 1-1v-1a3 3 0 0 1 6 0v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5l-3-2-3 2v6h-4V5L7 3 4 5v15a1 1 0 0 0 1 1h3Z" />
  </Svg>
)

export default SvgComponent
