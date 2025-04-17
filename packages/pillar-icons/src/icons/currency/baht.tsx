import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const arc = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 4v2m0 12v2M8 6h5a3 3 0 0 1 3 3v.1a2.9 2.9 0 0 1-2.9 2.9H8h5a3 3 0 0 1 3 3v.1a2.9 2.9 0 0 1-2.9 2.9H8V6Z" />
  </Svg>
)

export default arc
