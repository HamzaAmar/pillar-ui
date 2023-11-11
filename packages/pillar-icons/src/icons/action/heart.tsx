import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const heart = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m19 13-7 7-8-7a5 5 0 1 1 8-7 5 5 0 1 1 7 7" />
  </svg>
)

heart.displayName = 'action-heart'

export default heart
