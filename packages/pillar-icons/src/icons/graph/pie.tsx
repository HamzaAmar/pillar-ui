import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Pie = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H13a2 2 0 0 1-2-2V4a.9.9 0 0 0-1-.8Z" />
    <path d="M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1V3.5Z" />
  </svg>
)

export default Pie
