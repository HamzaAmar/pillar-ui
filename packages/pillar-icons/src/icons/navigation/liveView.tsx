import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const liveView = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-8-5v0m0 7-3.5-5a4 4 0 1 1 7 0L12 18Z" />
  </svg>
)

export default liveView
