import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const ripple = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0h3m0 0 2-2.5M13 12l2 2.5M20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />{' '}
  </Svg>
)

export default ripple
