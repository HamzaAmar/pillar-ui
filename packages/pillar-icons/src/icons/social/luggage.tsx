import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const luggage = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 4h12M6 16h12m-9 4v1m6-1v1M8 6h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2Z" />
  </svg>
)

export default luggage
