import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const arrowCircle = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m8 12 4 4m0 0V8m0 8 4-4m5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default arrowCircle
