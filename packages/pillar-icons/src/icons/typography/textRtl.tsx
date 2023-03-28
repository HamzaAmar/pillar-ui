import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 4H9.5a3.5 3.5 0 1 0 0 7h.5m4 4V4m-4 11V4M5 19h14M5 19l2 2m-2-2 2-2" />
  </svg>
)

export default justify
