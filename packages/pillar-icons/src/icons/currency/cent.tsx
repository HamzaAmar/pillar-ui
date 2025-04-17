import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cent = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 7.5A6 6 0 0 0 12 6m0 0a6 6 0 0 0 0 12m0-12V4m0 14a6 6 0 0 0 4-1.5M12 18v2" />
  </Svg>
)

export default cent
