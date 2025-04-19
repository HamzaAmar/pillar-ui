import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const faceID = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 10h0m6 0h0m-5.5 5a3.5 3.5 0 0 0 5 0" />
  </Svg>
)

export default faceID
