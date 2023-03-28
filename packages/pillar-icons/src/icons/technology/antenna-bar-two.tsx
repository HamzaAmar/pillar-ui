import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const AntennaBarTwo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 18v-3m4 3v-6m4 6v0m4 0v0" />
  </svg>
)

export default AntennaBarTwo
