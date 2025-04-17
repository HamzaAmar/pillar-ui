import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <Svg {...props}>
    <path d="m16 3-4 4-4-4M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default tv
