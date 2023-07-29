import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bandage = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 21 6.3-11.7c.6-1 1.8-4-1.5-5.8-3.2-1.6-5.2 1-5.8 2" />
  </svg>
)

export default bandage
