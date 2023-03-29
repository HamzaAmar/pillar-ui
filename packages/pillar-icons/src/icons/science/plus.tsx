import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const plus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 5v14m-7-7h14" />
  </svg>
)

export default plus
