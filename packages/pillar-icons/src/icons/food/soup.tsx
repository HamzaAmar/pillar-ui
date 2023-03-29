import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const soup = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 19h18M9 8V5m3 0v3m3-3v3M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8Z" />
  </svg>
)

export default soup
