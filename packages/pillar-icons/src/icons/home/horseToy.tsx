import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const horseToy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3.5 17.5c5.7 4.7 11.3 4.7 17 0m-1.5 1L17 10l1-2 2 1 1.5-1.5L19 3c-5 .2-6 3.1-7 6H6a3 3 0 0 0-3 3m2 6.5L7 9m1 11 2-5h4l2 5" />
  </svg>
)

export default horseToy
