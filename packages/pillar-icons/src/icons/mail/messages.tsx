import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Messages = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2m15 4-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10Z" />
  </svg>
)

export default Messages
