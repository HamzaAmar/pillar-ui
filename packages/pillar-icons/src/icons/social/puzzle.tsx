import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const puzzle = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4.5 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 1 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 1 0 0-4h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
  </svg>
)

export default puzzle
