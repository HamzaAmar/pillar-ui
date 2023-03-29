import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tank = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 15v0m10 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0h-6.5m9.5-1.8V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5M18 5h-1a1 1 0 0 0-1 1v4m-5 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default tank
