import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Adobe = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12.9 4.5 8 14a1 1 0 0 1-.4 1.4 1 1 0 0 1-.5.1h-3.5L12 12l-2.5 4H11l2 4H4a1 1 0 0 1-1-1l.1-.5 8-14a1 1 0 0 1 1.8 0Z" />
  </svg>
)

export default Adobe
