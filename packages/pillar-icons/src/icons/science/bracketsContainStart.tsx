import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bracketsContainStart = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 4h4v16h-4m-9-4h0m4 0h0m4 0h0" />
  </svg>
)

export default bracketsContainStart
