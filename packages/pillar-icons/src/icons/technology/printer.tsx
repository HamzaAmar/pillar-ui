import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const power = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 17h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2m10-8V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4m2 4h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default power
