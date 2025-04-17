import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const phoneCheck = (props: SvgType) => (
  <Svg {...props}>
    <path d="m15 6 2 2 4-4M5 4h4l2 5-2.5 1.5c1 2.2 2.8 4 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Svg>
)

export default phoneCheck
