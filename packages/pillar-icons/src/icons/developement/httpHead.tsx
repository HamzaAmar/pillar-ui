import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const httpHead = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 16V8m4 0v8m-4-4h4m7-4h-4v8h4m-4-4h2.5m4.5 4v-6a2 2 0 1 1 4 0v6m-4-3h4" />
  </svg>
)

export default httpHead
