import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const glassOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 21h8m-4-6v6m0-6c.9 0 1.7-.1 2.6-.4M12 15c-3.3 0-6-2-6-5l.5-3.5M7 3h10l1 7c0 1-.4 2.1-1 3M3 3l18 18" />
  </svg>
)

export default glassOff
