import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const forkLift = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h5m-9 0v-6h13m0 6a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0v-6m0 0-3-6H9v6m-4 0V7h4m13 8h-3V5m-3 8h3" />
  </svg>
)

export default forkLift
