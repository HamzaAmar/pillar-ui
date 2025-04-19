import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const three = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 13-2-2m2 1 2-2m-2 11V8m-2.2 8a3 3 0 0 1-2.7-3.7 3 3 0 0 1 .3-4.8A3 3 0 0 1 12 3.8a3 3 0 0 1 4.6 3.7 3 3 0 0 1 .3 4.8A3 3 0 0 1 14 16h0-4.2Z" />
  </Svg>
)

export default three
