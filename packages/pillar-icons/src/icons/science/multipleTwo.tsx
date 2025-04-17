import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const multipleTwo = (props: SvgType) => (
  <Svg {...props}>
    <path d="m14 16 4-4m0 4-4-4m-8-2a2 2 0 1 1 4 0c0 .6-.4 1.3-.8 1.9L6 16h4" />
  </Svg>
)

export default multipleTwo
