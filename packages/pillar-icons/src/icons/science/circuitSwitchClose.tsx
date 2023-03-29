import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitSwitchClose = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h2m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m12 0h2m-2 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-8 0h8" />
  </svg>
)

export default circuitSwitchClose
