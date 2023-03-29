import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const diode = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-6m0 0L8 7v10l8-5ZM2 12h6m8-5v10" />
  </svg>
)

export default diode
