import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const signal3g = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 8h3a2 2 0 1 1 0 4m0 0H5m3 0a2 2 0 1 1 0 4H5m14-8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
  </svg>
)

export default signal3g
