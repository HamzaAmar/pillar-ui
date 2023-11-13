import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wash = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3.5 9H4c.8 0 1.5-.2 2-.5S7.2 8 8 8s1.5.2 2 .5 1.2.5 2 .5 1.5-.2 2-.5 1.2-.5 2-.5 1.5.2 2 .5 1.2.5 2 .5h.5M3 6l1.7 10.3a2 2 0 0 0 2 1.7h10.6a2 2 0 0 0 2-1.7L21 6" />
  </svg>
)

export default wash
