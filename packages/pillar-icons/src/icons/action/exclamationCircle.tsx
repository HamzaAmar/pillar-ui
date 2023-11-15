import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const exclamationCircle = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 9v4m0 3v0m-9-4a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)

export default exclamationCircle
