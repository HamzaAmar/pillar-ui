import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ladder = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 3v18m8-18v18m-8-7h8m-8-4h8M8 6h8M8 18h8" />
  </svg>
)

export default ladder
