import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pill = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8.5 8.5 7 7m-11-3 8-8a5 5 0 0 1 7 7l-8 8a5 5 0 1 1-7-7Z" />
  </Svg>
)

export default pill
