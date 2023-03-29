import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tallyMarkOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 5v14m4-14v14m4-14v14m4-14v14M3 17 21 7" />
  </svg>
)

export default tallyMarkOff
