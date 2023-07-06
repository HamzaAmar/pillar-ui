import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const google = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.8 5.1A9 9 0 1 0 21 12h-8" />
  </svg>
)

export default google
