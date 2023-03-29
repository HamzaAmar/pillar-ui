import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const crane = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 21h6m-3 0V3m0 0L3 9h18M9 3l10 6m-2 0v4a2 2 0 1 1-2 2" />
  </svg>
)

export default crane
