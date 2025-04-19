import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const americanFootball = (props: SvgType) => (
  <Svg {...props}>
    <path d="m15 9-6 6m1-3 2 2m0-4 2 2m-6 9a5 5 0 0 0-5-5m5 5a5 5 0 0 1-5-5m5 5A13 13 0 0 0 21 8M3 16A13 13 0 0 1 16 3m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0 5 5" />
  </Svg>
)

export default americanFootball
