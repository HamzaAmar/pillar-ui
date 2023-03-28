import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Z = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 4h10L7 20h10" />
  </svg>
)

export default Z
