import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const borderBottom = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 20H4M4 4v0m4 0v0m4 0v0m4 0v0m4 0v0M4 8v0m8 0v0m8 0v0M4 12v0m4 0v0m4 0v0m4 0v0m4 0v0M4 16v0m8 0v0m8 0v0" />
  </svg>
)

export default borderBottom
