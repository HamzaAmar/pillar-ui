import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const spray = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 10a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-4 0h4m-4 0V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m5-3h0m3 2h0m0-4h0m3-2h0m0 4h0m0 4h0M10 7h1" />
  </svg>
)

export default spray
