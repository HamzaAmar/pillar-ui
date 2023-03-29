import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const caravan = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 17a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h8M9 17H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8M7 8h4l1 1v2l-1 1H7l-1-1V9l1-1Z" />
  </svg>
)

export default caravan
