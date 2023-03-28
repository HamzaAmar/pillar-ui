import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const W = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 4 4 16 4-14 4 14 4-16" />
  </svg>
)

export default W
