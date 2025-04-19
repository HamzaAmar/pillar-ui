import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 8H5m8-4 3 8 3-8M5 18h14M5 18l2-2m-2 2 2 2m12-2-2 2m2-2-2-2M5 12V6.5a2.5 2.5 0 1 1 5 0V12H5Z" />
  </Svg>
)

export default justify
