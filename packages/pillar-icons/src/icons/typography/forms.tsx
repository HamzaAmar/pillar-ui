import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a3 3 0 0 0-3 3m0 0v12M9 6a3 3 0 0 0-3-3m3 15a3 3 0 0 0 3 3m-3-3a3 3 0 0 1-3 3m7-14h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7M5 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m12-5h0m-4 0h0" />
  </svg>
)

export default justify
