import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const chalkboard = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1m-9-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1Z" />
  </svg>
)

export default chalkboard
