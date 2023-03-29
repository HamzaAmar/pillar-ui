import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stairs = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 18h4v-4h4v-4h4V6h4" />
  </svg>
)

export default stairs
