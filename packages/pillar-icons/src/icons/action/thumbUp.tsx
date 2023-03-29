import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const thumbUp = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0a4 4 0 0 0 4-4V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-1 5-1 2h-8a3 3 0 0 1-3-3" />
  </svg>
)

export default thumbUp
