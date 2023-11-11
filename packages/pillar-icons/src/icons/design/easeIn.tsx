import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const easeIn = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 20c8 0 18-16 18-16" />
  </svg>
)

export default easeIn
