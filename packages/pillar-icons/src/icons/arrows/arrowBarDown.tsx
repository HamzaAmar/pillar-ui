import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection, SvgType } from '../../type'

const ArrowBarDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M12 20V10m0 10 4-4m-4 4-4-4M4 4h16" />
  </svg>
)

const ArrowBarLeft = ({ direction, ...rest }: SvgType) => <ArrowBarDown direction="left" {...rest} />
const ArrowBarRight = ({ direction, ...rest }: SvgType) => <ArrowBarDown direction="right" {...rest} />
const ArrowBarTop = ({ direction, ...rest }: SvgType) => <ArrowBarDown direction="top" {...rest} />

export { ArrowBarDown, ArrowBarLeft, ArrowBarRight, ArrowBarTop }
