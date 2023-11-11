import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const easeInOut = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 20c8 0 10-16 18-16" />
  </svg>
)

export default easeInOut
