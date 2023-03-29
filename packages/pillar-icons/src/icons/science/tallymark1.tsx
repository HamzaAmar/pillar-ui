import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tallyMark = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 5v14" />
  </svg>
)

export default tallyMark
