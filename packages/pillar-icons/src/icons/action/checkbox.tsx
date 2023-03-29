import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const checkbox = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 11 3 3 8-8m0 6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
  </svg>
)

export default checkbox
