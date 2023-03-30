import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const fidgetSpinner = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m14 7 2.5 11-4 4-4-4L11 7m3 0 1-2.6A1 1 0 0 0 14 3h-3a1 1 0 0 0-1 1.4L11 7m3 0h-3m3 0 5 5.5" />
  </svg>
)

export default fidgetSpinner
