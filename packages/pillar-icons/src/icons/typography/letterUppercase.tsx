import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m4 6V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7" />
  </svg>
)

export default justify
