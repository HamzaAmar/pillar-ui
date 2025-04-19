import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const helicopter = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 10 1 2h6m3-3V6M5 6h15m-5 3.1V13h5.5M15 19v-3m4 3h-8m1-10a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.3-3.1-5-7-5h-2Z" />
  </Svg>
)

export default helicopter
