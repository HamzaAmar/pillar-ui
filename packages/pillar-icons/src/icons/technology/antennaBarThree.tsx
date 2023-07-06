import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const AntennaBarThree = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 18v-3m4 3v-6m4 6V9m4 9v0" />
  </svg>
)

export default AntennaBarThree
