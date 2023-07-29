import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const heartRateMonitor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 20h10m-8-4v4m6-4v4M7 10h2l2 3 2-6 1 3h3M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
  </svg>
)

export default heartRateMonitor
