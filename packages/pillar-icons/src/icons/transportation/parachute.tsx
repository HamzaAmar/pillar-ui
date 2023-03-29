import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const parachute = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12a10 10 0 0 0-20 0m20 0c0-1.7-1.5-3-3.3-3-1.8 0-3.2 1.3-3.2 3m6.5 0L12 22M2 12c0-1.7 1.5-3 3.3-3 1.7 0 3.2 1.3 3.2 3M2 12l10 10m3.5-10c0-1.7-1.6-3-3.5-3-2 0-3.5 1.3-3.5 3m7 0L12 22M8.5 12 12 22" />
  </svg>
)

export default parachute
