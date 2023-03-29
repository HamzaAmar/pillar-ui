import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playlist = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0V4h4m-8 1H3m0 4h10m-4 4H3" />
  </svg>
)

export default playlist
