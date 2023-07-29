import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wink = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 10h0m5.5 5a3.5 3.5 0 0 1-5 0m6-6.5L14 10l1.5 1.5M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
  </svg>
)
export default wink
