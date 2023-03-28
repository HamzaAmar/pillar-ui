import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 3h3v18H3V3Zm12 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
  </svg>
)

export default SvgComponent
