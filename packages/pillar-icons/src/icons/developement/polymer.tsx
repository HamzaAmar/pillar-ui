import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const polymer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.7 6 3 12l3.7 6h1l8.5-12h1.1l3.7 6-3.7 6" />
  </svg>
)

export default polymer
