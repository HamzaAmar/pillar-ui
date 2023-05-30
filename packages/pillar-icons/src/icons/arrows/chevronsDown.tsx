import { ROTATION, svgProps } from '../../shared'
import { SvgType, SvgWithDirection } from '../../type'

const ChevronsDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="m7 7 5 5 5-5M7 13l5 5 5-5" />
  </svg>
)

const ChevronsLeft = ({ direction, ...rest }: SvgType) => <ChevronsDown direction="left" {...rest} />
const ChevronsRight = ({ direction, ...rest }: SvgType) => <ChevronsDown direction="right" {...rest} />
const ChevronsTop = ({ direction, ...rest }: SvgType) => <ChevronsDown direction="top" {...rest} />

export { ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsTop }
