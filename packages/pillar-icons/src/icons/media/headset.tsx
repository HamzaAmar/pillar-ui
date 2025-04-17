import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const headset = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 15v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0Zm0 0v-3a8 8 0 1 1 16 0v3m0 0a2 2 0 1 0-4 0v2l2 2m2-4v2l-2 2m0 0-2 2-4 1" />
  </Svg>
)

export default headset
