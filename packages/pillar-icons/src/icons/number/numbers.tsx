import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const numbers = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 10V3L6 5m0 11a2 2 0 0 1 4 0c0 .6-.6 1.5-1 2l-3 3h4m5-7a2 2 0 1 0 2-2 2 2 0 1 0-2-2m-8.5 0h3" />
  </svg>
)

export default numbers
