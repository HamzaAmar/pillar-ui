import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const I = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 4v16" />
  </svg>
)

export default I
