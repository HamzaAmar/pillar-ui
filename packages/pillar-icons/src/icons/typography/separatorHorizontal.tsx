import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 4v16M8 8l-4 4 4 4m8 0 4-4-4-4" />
  </svg>
)

export default justify
