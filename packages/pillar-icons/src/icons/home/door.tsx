import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const door = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 12v0M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
  </svg>
)

export default door
