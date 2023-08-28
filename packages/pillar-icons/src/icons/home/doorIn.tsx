import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const doorIn = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 12v0M3 21h18M5 21V5a2 2 0 0 1 2-2h6m4 10.5V21m4-14h-7m0 0 3-3m-3 3 3 3" />
  </svg>
)

export default doorIn
