import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const faceCheck = (props: SvgType) => (
  <Svg {...props}>
    <path d="M21 12a9 9 0 1 0-9 9m6-1a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v1.5m0-5.5v-1.5m3 1.8-1.3.7m-3.4 2-1.3.8m0-3.6 1.3.8m3.4 2 1.3.8M9 10h0m6 0h0m-5.5 5c.7.6 1.6 1 2.5 1" />
  </Svg>
)
export default faceCheck
