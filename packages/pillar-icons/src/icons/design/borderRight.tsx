import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const borderRight = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 4v16M4 4v0m4 0v0m4 0v0m4 0v0M4 8v0m8 0v0m-8 4v0m4 0v0m4 0v0m4 0v0M4 16v0m8 0v0m-8 4v0m4 0v0m4 0v0m4 0v0" />
  </svg>
)

export default borderRight
