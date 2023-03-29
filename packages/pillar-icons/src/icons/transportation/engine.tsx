import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const engine = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.4a1 1 0 0 1 .9.6l1.4 2.8a1 1 0 0 0 1 .6H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-.8-.4L8 16H6v-6Z" />
  </svg>
)

export default engine
