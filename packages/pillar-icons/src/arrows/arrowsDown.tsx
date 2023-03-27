import { ROTATION, svgProps } from '../shared'
import { SvgWithDirection } from '../type'

const arrows = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M7 21V3m0 18-3-3m3 3 3-3m10 0-3 3m0 0-3-3m3 3V3" />
  </svg>
)

export default arrows
