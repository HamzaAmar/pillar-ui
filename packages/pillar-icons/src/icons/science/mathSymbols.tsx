import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mathSymbol = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12h18m-9-9v18m4.5-16.5 3 3m0-3-3 3M6 4v4M4 6h4m10 10h0m0 4h0M4 18h4" />
  </svg>
)

export default mathSymbol
