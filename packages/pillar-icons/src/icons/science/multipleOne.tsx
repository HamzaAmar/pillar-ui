import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const multipleOne = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 16V8l-2 2m6 6 4-4m0 4-4-4" />
  </Svg>
)

export default multipleOne
