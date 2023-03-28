import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const skySkipper = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4M9 9v0m0 3v0m0 3v0m0 3v0" />
  </svg>
)

export default skySkipper
