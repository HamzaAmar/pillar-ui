import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const one = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 20V4L8 9" />
  </Svg>
)

export default one
