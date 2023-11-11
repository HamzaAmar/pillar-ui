import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const easeOut = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 20S13 4 21 4" />
  </svg>
)

export default easeOut
