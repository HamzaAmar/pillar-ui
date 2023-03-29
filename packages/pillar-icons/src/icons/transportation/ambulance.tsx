import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ambulance = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h6M5 17H3V6a1 1 0 0 1 1-1h9v12m6 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2v-6m0 0h-8m8 0-3-5h-5m-7 4h4M8 8v4" />
  </svg>
)

export default ambulance
