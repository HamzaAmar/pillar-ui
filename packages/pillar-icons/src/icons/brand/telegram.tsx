import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
)

export default SvgComponent
