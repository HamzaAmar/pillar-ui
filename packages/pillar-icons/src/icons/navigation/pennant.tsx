import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pennant = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 21h4m-2 0V3m0 1 9 4-9 4" />
  </svg>
)

export default pennant
