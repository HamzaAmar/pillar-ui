import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const volumeDown = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 8a5 5 0 0 1 0 8m-9-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4-5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1l-4-5Z" />
  </svg>
)

export default volumeDown
