import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const ArrowsDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M7 21V3m0 18-3-3m3 3 3-3m10 0-3 3m0 0-3-3m3 3V3" />
  </svg>
)

const ArrowsLeft = ({ direction, ...rest }: SvgType) => <ArrowsDown direction="left" {...rest} />
const ArrowsRight = ({ direction, ...rest }: SvgType) => <ArrowsDown direction="right" {...rest} />
const ArrowsTop = ({ direction, ...rest }: SvgType) => <ArrowsDown direction="top" {...rest} />

export { ArrowsDown, ArrowsLeft, ArrowsRight, ArrowsTop }
