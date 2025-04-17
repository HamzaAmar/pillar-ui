import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cast = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 19h0m4 0a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8m12 8h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 2" />
  </Svg>
)

export default cast
