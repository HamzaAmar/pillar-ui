import { ROTATION, svgProps } from '../shared'
import { SvgWithDirection } from '../type'

const arrowBarDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 20V10m0 10 4-4m-4 4-4-4M4 4h16" />
  </svg>
)

export default arrowBarDown
