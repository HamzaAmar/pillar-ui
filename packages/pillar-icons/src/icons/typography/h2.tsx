import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 12a2 2 0 0 1 4 0c0 .6-.4 1.3-.8 1.9L17 18h4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2" />
  </Svg>
)

export default justify
