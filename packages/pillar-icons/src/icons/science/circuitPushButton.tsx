import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitPushButton = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 17h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm16 0h2m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 11h12m-6 0V5" />
  </svg>
)

export default circuitPushButton
