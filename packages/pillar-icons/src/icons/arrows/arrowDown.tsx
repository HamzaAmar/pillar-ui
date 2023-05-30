import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const ArrowDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 5v14m0 0 4-4m-4 4-4-4" />
  </svg>
)

const ArrowLeft = ({ direction, ...rest }: SvgType) => <ArrowDown direction="left" {...rest} />
const ArrowRight = ({ direction, ...rest }: SvgType) => <ArrowDown direction="right" {...rest} />
const ArrowTop = ({ direction, ...rest }: SvgType) => <ArrowDown direction="top" {...rest} />

export { ArrowDown, ArrowLeft, ArrowRight, ArrowTop }
