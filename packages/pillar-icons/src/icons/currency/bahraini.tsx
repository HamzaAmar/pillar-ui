import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const arc = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3m-4 9v0m7-4v0m3 0h2a2 2 0 0 0 1.7-3.1L18 8" />
  </svg>
)

export default arc
