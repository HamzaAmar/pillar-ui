import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const CaretDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m6 9 6 6 6-6H6Z" />
  </svg>
)

const CaretLeft = ({ direction, ...rest }: SvgType) => <CaretDown direction="left" {...rest} />
const CaretRight = ({ direction, ...rest }: SvgType) => <CaretDown direction="right" {...rest} />
const CaretTop = ({ direction, ...rest }: SvgType) => <CaretDown direction="top" {...rest} />

export { CaretDown, CaretLeft, CaretRight, CaretTop }
