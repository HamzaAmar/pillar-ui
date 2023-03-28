import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 6h5M7 18h7M4.5 6l5.5 7m0 0v5m0-5 6-5m-3.5 0h5m2.5 3v4m0 3v0" />
  </svg>
)

export default SvgComponent
