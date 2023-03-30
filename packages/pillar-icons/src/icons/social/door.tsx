import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const door = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12.2 10v0m-11 9h18m-15 0V3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
  </svg>
)

export default door
