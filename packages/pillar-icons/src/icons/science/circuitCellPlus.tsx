import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitCellPlus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h9m4 0h7M11 5v14m4-10v6M3 5h4M5 3v4" />
  </svg>
)

export default circuitCellPlus
