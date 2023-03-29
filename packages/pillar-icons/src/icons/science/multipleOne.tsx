import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const multipleOne = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 16V8l-2 2m6 6 4-4m0 4-4-4" />
  </svg>
)

export default multipleOne
