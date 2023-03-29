import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const multipleOneHalf = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 16V8l-2 2m8 6h2a2 2 0 0 0 0-4h-2V8h4m-7 8v0m10 0 4-4m0 4-4-4" />
  </svg>
)

export default multipleOneHalf
