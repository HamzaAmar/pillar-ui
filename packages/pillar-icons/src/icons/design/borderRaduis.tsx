import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const borderRaduis = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v2m0 8v2a2 2 0 0 1-2 2h-2m-8 0H6a2 2 0 0 1-2-2v-2m0-8V6a2 2 0 0 1 2-2h2" />
  </Svg>
)

export default borderRaduis
