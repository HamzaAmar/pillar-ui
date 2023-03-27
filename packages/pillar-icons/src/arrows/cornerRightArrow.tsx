import { ROTATION, svgProps } from '../shared'
import { SvgWithDirection } from '../type'

const cornerRightArrow = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M6 6h6a3 3 0 0 1 3 3v10m0 0-4-4m4 4 4-4" />
  </svg>
)

export default cornerRightArrow
