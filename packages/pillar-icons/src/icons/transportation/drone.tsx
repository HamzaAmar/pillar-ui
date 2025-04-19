import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const drone = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 10h4m-4 0v4m0-4L6.5 6.5M14 10v4m0-4 3.5-3.5M14 14h-4m4 0 3.5 3.5M10 14l-3.5 3.5M10 6a3.5 3.5 0 1 0-4 4m12 0a3.5 3.5 0 1 0-4-4m0 12a3.5 3.5 0 1 0 4-4M6 14a3.5 3.5 0 1 0 4 4" />
  </Svg>
)

export default drone
