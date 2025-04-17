import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const heart = (props: SvgType) => (
  <Svg {...props}>
    <path d="m19 13-2 2m-5 5-8-7a5 5 0 1 1 8-7 5 5 0 1 1 7 7m-3 6h6" />
  </Svg>
)

heart.displayName = 'action-heart'

export default heart
