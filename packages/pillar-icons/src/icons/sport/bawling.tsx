import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bowling = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 9v0m4-1v0m-1 4v0m7 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default bowling
