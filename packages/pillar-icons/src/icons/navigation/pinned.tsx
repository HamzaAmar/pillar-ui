import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pinned = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 4v6l-2 4v2h10v-2l-2-4V4m-3 12v5M8 4h8" />
  </svg>
)

export default pinned
