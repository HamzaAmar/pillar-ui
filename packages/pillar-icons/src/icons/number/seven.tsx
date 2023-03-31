import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const seven = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4h8l-4 16" />
  </svg>
)

export default anchor
