import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const urgent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 16v-4a4 4 0 1 1 8 0v4M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M6 17a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2Z" />
  </svg>
)

export default urgent
