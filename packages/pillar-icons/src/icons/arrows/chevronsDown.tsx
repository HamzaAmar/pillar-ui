import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const chevronsDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m7 7 5 5 5-5M7 13l5 5 5-5" />
  </svg>
)

export default chevronsDown
