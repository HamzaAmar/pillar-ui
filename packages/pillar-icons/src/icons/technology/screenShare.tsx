import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tablet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9M7 20h10m-8-4v4m6-4v4m2-16h4m0 0v4m0-4-5 5" />
  </svg>
)

export default tablet
