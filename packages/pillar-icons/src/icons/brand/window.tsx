import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const window = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 5v14m-8-7h16m-2.2 8-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9v.1Z" />
  </svg>
)

export default window
