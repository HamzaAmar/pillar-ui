import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const lamp = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 21h6m-3 0v-8m-7 0h14l-4-8H9l-4 8Z" />
  </svg>
)

export default lamp
