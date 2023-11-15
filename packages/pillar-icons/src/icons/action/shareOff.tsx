import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const share = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15.9 15.9a3 3 0 0 0 4.2 4.2m.6-3.4a3 3 0 0 0-1.5-1.5M8.7 10.7 10 10m2.7-1.3 2.6-1.4m-6.6 6 6.6 3.4M3 3l18 18M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </svg>
)
export default share
