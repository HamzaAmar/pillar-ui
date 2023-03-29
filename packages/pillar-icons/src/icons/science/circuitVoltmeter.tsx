import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circuitVoltemeter = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 12a7 7 0 1 1-14 0m14 0a7 7 0 1 0-14 0m14 0h3M5 12H2m8-2 2 4 2-4" />
  </svg>
)

export default circuitVoltemeter
