import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const A = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12M7 13h10" />
  </svg>
)

export default A
