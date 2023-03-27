import { ROTATION, svgProps } from '../shared'
import { SvgWithDirection } from '../type'

const chevronDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default chevronDown
