import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const X = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 4 10 16m0-16L7 20" />
  </svg>
)

export default X
