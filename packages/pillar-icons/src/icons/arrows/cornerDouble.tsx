import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const CornerDoubleDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M18 4h-6a3 3 0 0 0-3 3v7m0 0 4-4m-4 4-4-4m8 5-4 4-4-4" />
  </svg>
)

const CornerDoubleLeft = ({ direction, ...rest }: SvgType) => <CornerDoubleDown direction="left" {...rest} />
const CornerDoubleRight = ({ direction, ...rest }: SvgType) => <CornerDoubleDown direction="right" {...rest} />
const CornerDoubleTop = ({ direction, ...rest }: SvgType) => <CornerDoubleDown direction="top" {...rest} />

export { CornerDoubleDown, CornerDoubleLeft, CornerDoubleRight, CornerDoubleTop }
