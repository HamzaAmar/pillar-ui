import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.5 6.5a6 6 0 1 0-3 8m3 3a6 6 0 1 0-8-3m-3 3a6 6 0 1 0 3-8m-3-3a6 6 0 1 0 8 3" />
  </svg>
)

export default SvgComponent
