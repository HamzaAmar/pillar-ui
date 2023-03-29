import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const multipleTwo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m14 16 4-4m0 4-4-4m-8-2a2 2 0 1 1 4 0c0 .6-.4 1.3-.8 1.9L6 16h4" />
  </svg>
)

export default multipleTwo
