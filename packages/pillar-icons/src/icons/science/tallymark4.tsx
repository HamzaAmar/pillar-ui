import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tallyMark4 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 5v14m4-14v14m4-14v14m4-14v14" />
  </svg>
)

export default tallyMark4
