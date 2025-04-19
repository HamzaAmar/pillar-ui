import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const shazam = (props: SvgType) => (
  <Svg {...props}>
    <path d="m10 12 2-2a2.8 2.8 0 1 1 4 4l-3 3m1-5-2 2a2.8 2.8 0 0 1-4-4l3-3m10 5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default shazam
