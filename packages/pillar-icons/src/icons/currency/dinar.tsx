import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 20v0m-8-7 2.4-.9a1 1 0 0 0-.1-1.9l-1.5-.4a1 1 0 0 1-.1-2L9 7m-6 7v1a3 3 0 0 0 3 3h4.2a3 3 0 0 0 3-3.3L12 4m4 13 1 1h2a2 2 0 0 0 1.7-3.1L18 11" />
  </svg>
)

export default cent
