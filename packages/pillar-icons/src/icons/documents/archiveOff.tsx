import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const archiveOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4h11a2 2 0 1 1 0 4m0 0h-7m7 0v7M8 8H5m0 0a2 2 0 0 1-.8-3.8M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.8-1.2M10 12h2M3 3l18 18" />
  </svg>
)

export default archiveOff
