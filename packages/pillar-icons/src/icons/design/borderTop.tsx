import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const borderTop = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 4h16M4 8v0m8 0v0m8 0v0M4 12v0m4 0v0m4 0v0m4 0v0m4 0v0M4 16v0m8 0v0m8 0v0M4 20v0m4 0v0m4 0v0m4 0v0m4 0v0" />
  </svg>
)

export default borderTop
