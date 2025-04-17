import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16" />
  </Svg>
)

export default justify
