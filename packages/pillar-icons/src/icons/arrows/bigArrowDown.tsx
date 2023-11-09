import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const BigArrowDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M15 4v8h3.6a1 1 0 0 1 .7 1.7l-6.6 6.6a1 1 0 0 1-1.4 0l-6.6-6.6a1 1 0 0 1 .7-1.7H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z" />
  </svg>
)

export default BigArrowDown
