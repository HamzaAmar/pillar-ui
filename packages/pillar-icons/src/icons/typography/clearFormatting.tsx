import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17 15 4 4m0-4-4 4M7 6V5h11v1M7 19h4m2-14L9 19" />
  </svg>
)

export default justify
