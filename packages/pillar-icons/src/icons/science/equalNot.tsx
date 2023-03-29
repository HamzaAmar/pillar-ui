import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const equalNot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 9h14M5 15h14m0-10L5 19" />
  </svg>
)

export default equalNot
