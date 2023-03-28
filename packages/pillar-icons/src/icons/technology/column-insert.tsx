import { ROTATION, svgProps } from '../../shared'
import { SvgWithDirection } from '../../type'

const columnInsert = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg {...svgProps} transform={`rotate(${ROTATION[direction]})`} {...rest}>
    <path d="M5 12h4m-2-2v4m7-10h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
  </svg>
)

export default columnInsert
