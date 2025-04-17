import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="m5 7 8 10m-8 0 8-10m8 13h-4l3.5-4a2 2 0 0 0-3.5-2" />
  </Svg>
)

export default justify
