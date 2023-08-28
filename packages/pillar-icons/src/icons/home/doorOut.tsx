import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const doorOut = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 12v0M3 21h18M5 21V5a2 2 0 0 1 2-2h7.5M17 13.5V21M14 7h7m0 0-3-3m3 3-3 3" />
  </svg>
)

export default doorOut
