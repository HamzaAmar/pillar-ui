import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const gravatar = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5.6 5.6A9 9 0 1 0 12 3v7.7" />
  </Svg>
)

export default gravatar
