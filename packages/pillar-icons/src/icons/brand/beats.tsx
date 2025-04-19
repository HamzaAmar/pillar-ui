import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const beats = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 12V4m12 8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5 .5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </Svg>
)

export default beats
