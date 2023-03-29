import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mushroom = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 12v7a2 2 0 0 0 4 0v-7m6-.9A8 8 0 0 0 12 3a8 8 0 0 0-8 8.1.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9Z" />
  </svg>
)

export default mushroom
