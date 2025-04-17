import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 6h6M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3M9 6V3h6v3m0 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m0 0H9m6 0v3H9v-3m0-4v-4m3 4v-1m3 1v-3" />
  </Svg>
)

export default tv
