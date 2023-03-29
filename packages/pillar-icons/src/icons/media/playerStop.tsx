import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playerStop = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 5H7L5 7v10l2 2h10l2-2V7l-2-2Z" />
  </svg>
)

export default playerStop
