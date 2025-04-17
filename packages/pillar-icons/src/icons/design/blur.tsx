import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const blur = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 3v17m0-8h9m-9-3h8m-8-3h6m-6 12h6m-6-3h8m-8 6a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </Svg>
)

export default blur
