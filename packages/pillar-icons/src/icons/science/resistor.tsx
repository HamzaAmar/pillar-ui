import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const resistor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 12h2l2-5 3 10 3-10 3 10 3-10 2 5h2" />
  </svg>
)

export default resistor
