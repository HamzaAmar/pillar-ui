import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const heart = (props: SvgType) => (
  <Svg {...props}>
    <path d="m19 13-7 7-8-7a5 5 0 1 1 8-7 5 5 0 1 1 7 7" />
  </Svg>
)

heart.displayName = 'action-heart'

export default heart
