import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tallyMark2 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 5v14m4-14v14" />
  </svg>
)

export default tallyMark2
