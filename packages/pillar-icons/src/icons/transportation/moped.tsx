import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const moped = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3m11 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default moped
