import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const infographic = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 7a4 4 0 1 1-4-4m4 4a4 4 0 0 0-4-4m4 4H7V3m2 14v4m8-7v7m-4-8v8m8-9v9" />
  </Svg>
)

export default infographic
