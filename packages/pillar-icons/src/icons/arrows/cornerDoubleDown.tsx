import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const CornerDoubleDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M18 4h-6a3 3 0 0 0-3 3v7m0 0 4-4m-4 4-4-4m8 5-4 4-4-4" />
  </svg>
)

export default CornerDoubleDown
