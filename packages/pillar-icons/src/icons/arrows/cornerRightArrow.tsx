import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const CornerRightArrow = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M6 6h6a3 3 0 0 1 3 3v10m0 0-4-4m4 4 4-4" />
  </svg>
)

const CornerLeft = ({ direction, ...rest }: SvgType) => <CornerRightArrow direction="left" {...rest} />
const CornerRight = ({ direction, ...rest }: SvgType) => <CornerRightArrow direction="right" {...rest} />
const CornerTop = ({ direction, ...rest }: SvgType) => <CornerRightArrow direction="top" {...rest} />

export { CornerRightArrow, CornerLeft, CornerRight, CornerTop }
