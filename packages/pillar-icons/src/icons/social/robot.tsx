import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const robot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 17h4M9 8 8 4m7 4 1-4M7 8h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1v-1a2 2 0 0 1 2-2Zm2.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default robot
