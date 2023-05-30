import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const ChevronDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const ChevronLeft = ({ direction, ...rest }: SvgType) => <ChevronDown direction="left" {...rest} />
const ChevronRight = ({ direction, ...rest }: SvgType) => <ChevronDown direction="right" {...rest} />
const ChevronTop = ({ direction, ...rest }: SvgType) => <ChevronDown direction="top" {...rest} />

export { ChevronDown, ChevronLeft, ChevronRight, ChevronTop }
