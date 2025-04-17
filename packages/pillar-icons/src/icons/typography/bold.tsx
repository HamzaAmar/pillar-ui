import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 12a3.5 3.5 0 1 0 0-7H7v7m6 0H7m6 0h1a3.5 3.5 0 1 1 0 7H7v-7" />
  </Svg>
)

export default justify
