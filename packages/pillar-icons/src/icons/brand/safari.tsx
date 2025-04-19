import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const safari = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8 16 2-6 6-2-2 6-6 2Z" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </Svg>
)

export default safari
