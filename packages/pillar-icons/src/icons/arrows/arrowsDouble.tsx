import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const ArrowsDoubleDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M17 3v18m0-18 3 3m-3-3-3 3m-4 12-3 3m0 0-3-3m3 3V3" />
  </svg>
)

const ArrowDownLeft = ({ direction, ...rest }: SvgType) => <ArrowsDoubleDown direction="left" {...rest} />
const ArrowDownRight = ({ direction, ...rest }: SvgType) => <ArrowsDoubleDown direction="right" {...rest} />
const ArrowDownTop = ({ direction, ...rest }: SvgType) => <ArrowsDoubleDown direction="top" {...rest} />

export { ArrowsDoubleDown, ArrowDownLeft, ArrowDownRight, ArrowDownTop }
