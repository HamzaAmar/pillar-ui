import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 10v7m4 3V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2 2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M7 10h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default justify
