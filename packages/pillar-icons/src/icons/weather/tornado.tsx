import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const temperature = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 4H3m10 12H7m4 4h4M6 8h14M4 12h12" />
  </svg>
)

export default temperature
