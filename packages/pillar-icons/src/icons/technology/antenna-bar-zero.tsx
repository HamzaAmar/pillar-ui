import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const AntennaBarZero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 18v0m4 0v0m4 0v0m4 0v0" />
  </svg>
)

export default AntennaBarZero
