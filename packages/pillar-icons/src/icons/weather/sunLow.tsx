import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sunLow = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 12h0m8-8v0m8 8h0m-8 8v0M6.3 6.3h0m11.4 0h0m0 11.4h0m-11.4 0h0M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default sunLow
