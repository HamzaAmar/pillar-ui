import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const exclamationCircle = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 19v0m0-4V5" />
  </svg>
)

export default exclamationCircle
