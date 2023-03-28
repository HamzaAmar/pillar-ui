import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const caret = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m6 9 6 6 6-6H6Z" />
  </svg>
)

export default caret
