import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const shovel = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17 4 3 3m-1.5-1.5-8 8m-2.2-2.2 4.4 4.4a1 1 0 0 1 0 1.4L10 19.8A4.1 4.1 0 0 1 4.2 14l2.7-2.7a1 1 0 0 1 1.4 0h0Z" />
  </svg>
)

export default shovel
