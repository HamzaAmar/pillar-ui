import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const faceCheck = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 13.2a9 9 0 1 0-9 7.8M9 10h0m6 0h0m-5.5 5c.7.6 1.6 1 2.5 1 1 0 1.8-.4 2.5-1m.5 4 2 2 4-4" />
  </Svg>
)
export default faceCheck
