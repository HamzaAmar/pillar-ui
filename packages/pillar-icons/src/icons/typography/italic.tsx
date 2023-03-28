import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 5h6M7 19h6m1-14-4 14" />
  </svg>
)

export default justify
