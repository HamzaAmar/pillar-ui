import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitCell = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h8m4 0h8M10 5v14m4-10v6" />
  </svg>
)

export default circuitCell
