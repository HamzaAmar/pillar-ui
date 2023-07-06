import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const signal5g = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 8H5v4h3a2 2 0 1 1 0 4H5m14-8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
  </svg>
)

export default signal5g
