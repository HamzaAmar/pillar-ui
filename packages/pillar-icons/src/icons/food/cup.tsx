import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cup = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.5 11 16 21H8L6.5 11M6 8V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1m-3-3V3M5 11h14V8H5v3Z" />
  </svg>
)

export default cup
