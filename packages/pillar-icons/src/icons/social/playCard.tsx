import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playCard = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 6h0m8 12h0m3-13v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2Zm-7 11-3-4 3-4 3 4-3 4Z" />
  </svg>
)

export default playCard
