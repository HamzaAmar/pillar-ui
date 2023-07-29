import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const happy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 9h0m6 0h0M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm5 1a4 4 0 1 0 8 0H8Z" />
  </svg>
)
export default happy
