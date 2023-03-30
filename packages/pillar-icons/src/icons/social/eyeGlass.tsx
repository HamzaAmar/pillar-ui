import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const eyeGlass = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4H6L3 14m0 0v2.5a3.5 3.5 0 1 0 7 0V14H3ZM16 4h2l3 10m0 0h-7v2.5a3.5 3.5 0 1 0 7 0V14Zm-11 2h4" />
  </svg>
)

export default eyeGlass
