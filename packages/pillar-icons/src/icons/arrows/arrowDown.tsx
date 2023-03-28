import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const arrow = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 5v14m0 0 4-4m-4 4-4-4" />
  </svg>
)

export default arrow
