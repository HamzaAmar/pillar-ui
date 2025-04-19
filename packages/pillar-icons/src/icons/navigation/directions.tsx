import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const directions = (props: SvgType) => (
  <Svg {...props}>
    <path d="M5 21V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v9a5 5 0 0 1-7 0 5 5 0 0 0-7 0" />{' '}
  </Svg>
)

export default directions
