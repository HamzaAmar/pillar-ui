import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const curling = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h1m3-4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m3-4h6m3-4h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2m4-4h-1M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm9 0v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1Z" />
  </svg>
)

export default curling
