import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const V = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 4 6 16 6-16" />
  </svg>
)

export default V
