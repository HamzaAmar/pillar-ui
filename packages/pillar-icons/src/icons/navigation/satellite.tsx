import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const satellite = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 10-3 3 3 3 3-3m1-7 3-3 3 3-3 3m-1 3 1.5 1.5m1 3.5a2.5 2.5 0 0 0 2.5-2.5M15 21a6 6 0 0 0 6-6M3.7 6.3l2.6-2.6a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4l-2.6 2.6a1 1 0 0 1-1.4 0L3.7 7.7a1 1 0 0 1 0-1.4Z" />
  </svg>
)

export default satellite
