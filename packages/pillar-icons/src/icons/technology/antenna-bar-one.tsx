import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const AntennaBarOne = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 18v-3m4 3v0m4 0v0m4 0v0" />
  </svg>
)

export default AntennaBarOne
