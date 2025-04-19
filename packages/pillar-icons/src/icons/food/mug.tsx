import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mug = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 8h2.5c1.4 0 2.5 1 2.5 2.3v2.4c0 1.3-1.1 2.3-2.5 2.3H16M4 5h11a1 1 0 0 1 1 1v8.7c0 2.4-2 4.3-4.3 4.3H7.3C5 19 3 17 3 14.7V6A1 1 0 0 1 4 5Z" />
  </Svg>
)

export default mug
