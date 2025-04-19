import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const heart = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 20-8-7a5 5 0 1 1 8-7 5 5 0 0 1 8 6m-4 7h6m-3-3v6" />
  </Svg>
)

heart.displayName = 'action-heart'

export default heart
