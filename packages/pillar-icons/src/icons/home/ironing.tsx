import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ironing = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 6h7.5a3 3 0 0 1 3 2.5l1.3 8.3a1 1 0 0 1-1 1.2H3a7 7 0 0 1 7-7h9.8" />
  </svg>
)

export default ironing
