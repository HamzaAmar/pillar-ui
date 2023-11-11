import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const borderLeft = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 20V4m4 0v0m4 0v0m4 0v0m4 0v0m-8 4v0m8 0v0M8 12v0m4 0v0m4 0v0m4 0v0m-8 4v0m8 0v0M8 20v0m4 0v0m4 0v0m4 0v0" />
  </svg>
)

export default borderLeft
