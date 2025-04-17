import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const camera = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    <path d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </Svg>
)

export default camera
