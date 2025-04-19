import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const map = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 4 3 7v13l6-3M9 4l6 3M9 4v13m6-10 6-3v13l-6 3m0-13v13m0 0-6-3" />
  </Svg>
)

export default map
