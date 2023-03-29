import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sailBoat = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1M4 18l-1-3h18l-1 3M8 7l-2 5m5 0h7l-7-9v9Z" />
  </svg>
)

export default sailBoat
