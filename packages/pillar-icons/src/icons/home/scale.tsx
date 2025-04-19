import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const scale = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 20h10M6 6l6-1 6 1M6 6l3 6a3 3 0 0 1-6 0l3-6Zm12 0 3 6a3 3 0 0 1-6 0l3-6Zm-6-3v17" />
  </Svg>
)

export default scale
